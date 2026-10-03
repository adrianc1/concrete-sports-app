import re
from datetime import datetime
from zoneinfo import ZoneInfo


def parse_score(raw_score: str | None):
    if raw_score is None or raw_score.strip() == "":
        return None
    else:
        return int(raw_score)


def parse_starts_at(date: str, time: str, school_year: str):

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
