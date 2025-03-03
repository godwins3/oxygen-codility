import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.core.database import Base, get_db
from app.main import app

# ✅ Use a PostgreSQL test database (Make sure you create this database in PostgreSQL)
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:newpassword@localhost:5432/oxygene_test"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# ✅ Override database dependency with a test session
def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

# ✅ Create test database tables before running tests
Base.metadata.create_all(bind=engine)

# ✅ Create a test client
client = TestClient(app)

# ✅ Sample user data
test_user = {"email": "test@example.com", "password": "testpassword"}

@pytest.fixture
def get_auth_token():
    """Fixture to get authentication token for tests."""
    client.post("/register", json=test_user)  # Register user
    response = client.post("/login", data={"username": test_user["email"], "password": test_user["password"]})
    return response.json().get("access_token")

def test_register_user():
    """Test user registration."""
    response = client.post("/register", json={"email": "newuser@example.com", "password": "securepassword"})
    assert response.status_code == 200
    assert response.json()["email"] == "newuser@example.com"

def test_login_user():
    """Test user login."""
    client.post("/register", json=test_user)  # Register first
    response = client.post("/login", data={"username": test_user["email"], "password": test_user["password"]})
    
    assert response.status_code == 200
    assert "access_token" in response.json()

def test_login_invalid_credentials():
    """Test login with incorrect credentials."""
    response = client.post("/login", data={"username": "wrong@example.com", "password": "wrongpassword"})
    
    assert response.status_code == 401
    assert response.json()["detail"] == "Incorrect username or password"

def test_protected_route_access(get_auth_token):
    """Test accessing a protected route with a valid token."""
    response = client.get("/tasks", headers={"Authorization": f"Bearer {get_auth_token}"})
    
    assert response.status_code == 200  # Should return task list (even if empty)

def test_protected_route_unauthorized():
    """Test accessing a protected route without a token."""
    response = client.get("/tasks")  # No token
    
    assert response.status_code == 401
    assert response.json()["detail"] == "Could not validate credentials"
