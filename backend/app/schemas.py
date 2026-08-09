# Pydantic response shapes
from datetime import datetime

from pydantic import BaseModel


class Game(BaseModel):
    id: int
    sport: str
    location: str | None 
    status: str 
    starts_at: datetime
    opponent: str
    concrete_score: int | None 
    opponent_score: int | None
    home_away: str
