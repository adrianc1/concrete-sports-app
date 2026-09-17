from datetime import datetime

from sqlalchemy import CHAR, TIMESTAMP, ForeignKey, UniqueConstraint
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column


class Base(DeclarativeBase):
    pass


class Sport(Base):
    __tablename__ = "sports"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    slug: Mapped[str] = mapped_column(unique=True)


class School(Base):
    __tablename__ = "schools"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    slug: Mapped[str] = mapped_column(unique=True)
    city: Mapped[str | None]
    state: Mapped[str | None] = mapped_column(CHAR(2))
    is_our_school: Mapped[bool] = mapped_column(default=False)


class Season(Base):
    __tablename__ = "seasons"

    id: Mapped[int] = mapped_column(primary_key=True)
    school_year: Mapped[str] = mapped_column(default="2026-2027")
    is_current: Mapped[bool] = mapped_column(default=True)


class SchoolAlias(Base):
    __tablename__ = "school_aliases"

    id: Mapped[int] = mapped_column(primary_key=True)
    school_id: Mapped[int] = mapped_column(ForeignKey("schools.id"))
    alias: Mapped[str] = mapped_column(unique=True)


class Team(Base):
    __tablename__ = "teams"
    __table_args__ = (UniqueConstraint("school_id", "sport_id"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    school_id: Mapped[int] = mapped_column(ForeignKey("schools.id"))
    sport_id: Mapped[int] = mapped_column(ForeignKey("sports.id"))


class Game(Base):
    __tablename__ = "games"
    __table_args__ = (UniqueConstraint("home_team_id", "away_team_id", "starts_at"),)

    id: Mapped[int] = mapped_column(primary_key=True)
    season_id: Mapped[int] = mapped_column(ForeignKey("seasons.id"))
    home_team_id: Mapped[int] = mapped_column(ForeignKey("teams.id"))
    away_team_id: Mapped[int] = mapped_column(ForeignKey("teams.id"))
    home_team_score: Mapped[int | None]
    away_team_score: Mapped[int | None]
    venue: Mapped[str | None]
    status: Mapped[str] = mapped_column(default="scheduled")
    starts_at: Mapped[datetime] = mapped_column(TIMESTAMP(timezone=True))
    created_at: Mapped[datetime] = mapped_column(TIMESTAMP(timezone=True))
    updated_at: Mapped[datetime] = mapped_column(TIMESTAMP(timezone=True))
    sport_id: Mapped[int] = mapped_column(ForeignKey("sports.id"))
