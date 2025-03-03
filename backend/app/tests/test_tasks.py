import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.core.database import Base, get_db
from app.main import app

# ✅ Use a PostgreSQL test database (Make sure you create this database)
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

# ✅ Sample user and task data
test_user = {"email": "test@example.com", "password": "testpassword"}
test_task = {"title": "Test Task", "description": "This is a test task"}

@pytest.fixture
def get_auth_token():
    """Fixture to get authentication token for tests."""
    client.post("/register", json=test_user)  # Register user
    response = client.post("/login", data={"username": test_user["email"], "password": test_user["password"]})
    return response.json().get("access_token")

def test_create_task(get_auth_token):
    """Test creating a new task."""
    response = client.post(
        "/tasks",
        json=test_task,
        headers={"Authorization": f"Bearer {get_auth_token}"}
    )
    assert response.status_code == 200
    assert response.json()["title"] == test_task["title"]

def test_get_tasks(get_auth_token):
    """Test retrieving tasks."""
    response = client.get("/tasks", headers={"Authorization": f"Bearer {get_auth_token}"})
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_update_task(get_auth_token):
    """Test updating a task."""
    # Create a task first
    create_response = client.post("/tasks", json=test_task, headers={"Authorization": f"Bearer {get_auth_token}"})
    task_id = create_response.json()["id"]

    updated_data = {"title": "Updated Task", "description": "Updated description"}
    update_response = client.put(f"/tasks/{task_id}", json=updated_data, headers={"Authorization": f"Bearer {get_auth_token}"})
    
    assert update_response.status_code == 200
    assert update_response.json()["title"] == "Updated Task"

def test_delete_task(get_auth_token):
    """Test deleting a task."""
    # Create a task first
    create_response = client.post("/tasks", json=test_task, headers={"Authorization": f"Bearer {get_auth_token}"})
    task_id = create_response.json()["id"]

    delete_response = client.delete(f"/tasks/{task_id}", headers={"Authorization": f"Bearer {get_auth_token}"})
    
    assert delete_response.status_code == 200
    assert delete_response.json()["message"] == "Task deleted successfully"
