from datetime import datetime
from zoneinfo import ZoneInfo


def parse_score(raw_score):
    if raw_score is None or raw_score.strip() == "":
        return None
    else:
        return int(raw_score)


def parse_starts_at(date, time, school_year):

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
