# /api Routes
from fastapi import APIRouter, HTTPException
from sqlalchemy import text

from app.database import engine
from app.schemas import GameRead

router = APIRouter(prefix="/api", tags=["games"])

_GAMES_BASE = """
    SELECT
        g.id                 AS id,
        sp.slug              AS sport,
        g.venue              AS location,
        g.status             AS status,
        g.starts_at          AS starts_at,
        CASE WHEN hs.is_our_school THEN as_.name          ELSE hs.name             END AS opponent,
        CASE WHEN hs.is_our_school THEN g.home_team_score ELSE g.away_team_score   END AS concrete_score,
        CASE WHEN hs.is_our_school THEN g.away_team_score ELSE g.home_team_score   END AS opponent_score,
        CASE WHEN hs.is_our_school THEN 'Home'            ELSE 'Away'              END AS home_away
    FROM games g
    JOIN teams   ht  ON ht.id  = g.home_team_id
    JOIN teams   at  ON at.id  = g.away_team_id
    JOIN schools hs  ON hs.id  = ht.school_id
    JOIN schools as_ ON as_.id = at.school_id
    JOIN sports  sp  ON sp.id  = g.sport_id
"""

ALL_GAMES = text(_GAMES_BASE + " ORDER BY g.starts_at DESC")

GET_SPORT = text(_GAMES_BASE + " WHERE sp.slug = :sport ORDER BY g.starts_at DESC")

SPORT_EXISTS = text('SELECT slug FROM sports WHERE slug = :sport ')


@router.get("/all", response_model=list[GameRead])
def get_all_games():
    with engine.connect() as conn:
        result = conn.execute(ALL_GAMES)
        return [dict(row) for row in result.mappings()]

@router.get("/{sport}", response_model=list[GameRead])
def get_sport(sport:str):
    with engine.connect() as conn:
        sport_exists = conn.execute(SPORT_EXISTS, {"sport": sport}).fetchone()
        if not sport_exists:
            raise HTTPException(status_code=404, detail="Sport not found")
        result = conn.execute(GET_SPORT, {"sport": sport})
        return [dict(row) for row in result.mappings()]

