from sqlalchemy.orm import Session
from app.models.task import Task
from app.schemas.task import TaskCreate

def create_task(db: Session, task: TaskCreate, user_id: int):
    db_task = Task(**task.dict(), owner_id=user_id)  #  Ensure `owner_id` matches your User model
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task

def get_tasks(db: Session, user_id: int, skip: int = 0, limit: int = 10):
    return db.query(Task).filter(Task.owner_id == user_id).offset(skip).limit(limit).all()

def get_task_by_id(db: Session, task_id: int):
    return db.query(Task).filter(Task.id == task_id).first()

def update_task(db: Session, task_id: int, task_update: dict):
    db_task = db.query(Task).filter(Task.id == task_id).first()
    
    if not db_task:
        return None  # Task not found
    
    for key, value in task_update.items():
        setattr(db_task, key, value)  #  Dynamically update fields
    
    db.commit()
    db.refresh(db_task)
    return db_task

def delete_task(db: Session, task_id: int):
    db_task = db.query(Task).filter(Task.id == task_id).first()
    
    if not db_task:
        return None  # Task not found
    
    db.delete(db_task)
    db.commit()
    return db_task  #  Return the deleted task for confirmation
