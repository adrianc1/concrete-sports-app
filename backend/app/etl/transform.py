import re
from datetime import datetime
from zoneinfo import ZoneInfo


def parse_score(raw_score: str | None) -> int | None:
    if raw_score is None or raw_score.strip() == "":
        return None
    else:
        return int(raw_score)


def parse_starts_at(date: str, time: str, school_year: str) -> datetime:

    new_date = date.strip().upper()
    formatted_date = datetime.strptime(new_date, "%a, %b %d").replace(
        tzinfo=ZoneInfo("America/Los_Angeles")
    )

    current_month = formatted_date.month

    day = formatted_date.day

    start_str, end_str = school_year.split("-")

    if len(end_str) == 2:
        end_str = start_str[:2] + end_str

    if current_month < 7:
        active_year = int(end_str)
    else:
        active_year = int(start_str)

    parsed_time = datetime.strptime(time.strip(), "%I:%M %p").replace(
        tzinfo=ZoneInfo("America/Los_Angeles")
    )

    converted_time = datetime(
        active_year,
        current_month,
        day,
        parsed_time.hour,
        parsed_time.minute,
        tzinfo=ZoneInfo("America/Los_Angeles"),
    )

    return converted_time


CLASSIFICATION_TAG = re.compile(r"\s*\(\d[AB]\)")


def normalize_team_name(team_name: str) -> str:
    # normalize spacing
    name = re.sub(r"\s*\(", " (", team_name)
    name = CLASSIFICATION_TAG.sub("", name)
    name = name.strip()

    # if closing parenthesis is missing
    if "(" in name and ")" not in name:
        name += ")"
    return name


# is game final or sheduled
def derive_status(home_score: int | None, away_score: int | None) -> str:
    if home_score is not None and away_score is not None:
        return "final"
    else:
        return "scheduled"


def transform_game(raw: dict, sport: str, school_year: str) -> dict | None:
    home_score = parse_score(raw["home_team_score"])
    away_score = parse_score(raw["away_team_score"])

    if home_score is None or away_score is None:
        return None

    return {
        "sport": sport,
        "home_team": normalize_team_name(raw["home_team"]),
        "away_team": normalize_team_name(raw["away_team"]),
        "home_team_score": home_score,
        "away_team_score": away_score,
        "venue": raw["location"].strip(),
        "status": derive_status(home_score, away_score),
        "starts_at": parse_starts_at(raw["date"], raw["time"], school_year),
    }
