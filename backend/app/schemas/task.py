from pydantic import BaseModel

class TaskBase(BaseModel):
    title: str
    description: str | None = None
    completed: bool = False

class TaskCreate(TaskBase):
    pass

class Task(TaskBase):
    id: int
    owner_id: int

    class Config:
        from_attributes = True