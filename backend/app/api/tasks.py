from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.schemas.task import TaskCreate, Task
from app.services import tasks, auth

router = APIRouter()

@router.post("/tasks", response_model=Task)
def create_task(task: TaskCreate, db: Session = Depends(get_db), current_user: auth.User = Depends(auth.get_current_user)):
    return tasks.create_task(db=db, task=task, user_id=current_user.id)

@router.get("/tasks", response_model=List[Task])
def read_tasks(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: auth.User = Depends(auth.get_current_user)):
    return tasks.get_tasks(db, user_id=current_user.id, skip=skip, limit=limit)

@router.get("/tasks/{task_id}", response_model=Task)
def read_task(task_id: int, db: Session = Depends(get_db), current_user: auth.User = Depends(auth.get_current_user)):
    db_task = tasks.get_task_by_id(db, task_id=task_id)
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    if db_task.owner_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to access this task")
    return db_task

# @router.put("/tasks/{task_id}", response_model=Task)
# def update_task(task_id: int, task: TaskCreate, db: Session = Depends(get_db), current_user: auth.User = Depends(auth.get_current_user)):
#     db_task = tasks.get_task_by_id(db, task_id=task_id)
#     if db_task is None:
#         raise HTTPException(status_code=404, detail="Task not found")
#     if db_task.owner_id != current_user.id:
#         raise HTTPException(status_code=403, detail="Not authorized to update this task")
#     return tasks.update_task(db=db, task_id=task_id, task=task)

@router.put("/tasks/{task_id}")
def update_task(
    task_id: int,
    task_update: TaskCreate,  #  Ensure this is named `task_update`
    db: Session = Depends(get_db),
    current_user: auth.User = Depends(auth.get_current_user)
    # current_user: User = Depends(auth.get_current_user)
):
    db_task = tasks.get_task_by_id(db, task_id)  #  Retrieve the task first
    if not db_task:
        raise HTTPException(status_code=404, detail="Task not found")
    
    if db_task.owner_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to update this task")

    updated_task = tasks.update_task(db, task_id, task_update.dict())  #  Use `task_update.dict()`
    return updated_task

@router.delete("/tasks/{task_id}", response_model=Task)
def delete_task(task_id: int, db: Session = Depends(get_db), current_user: auth.User = Depends(auth.get_current_user)):
    db_task = tasks.get_task_by_id(db, task_id=task_id)
    if db_task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    if db_task.owner_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to delete this task")
    return tasks.delete_task(db=db, task_id=task_id)