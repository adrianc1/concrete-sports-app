from datetime import datetime, tzinfo
from zoneinfo import ZoneInfo

def parse_score(raw_score):
    if raw_score is None or raw_score.strip() == "":
        return None
    else:
        return int(raw_score)

def parse_starts_at(date, time, school_year):
    MONTHS = {"JAN": 1, "FEB": 2, "MAR": 3, "APR": 4, "MAY":5, "JUN": 6, "JUL": 7, "AUG": 8, "SEP": 9, "OCT": 10, "NOV": 11, "DEC": 12 }

    new_date = date.strip().upper()

    current_month = datetime.strptime(new_date, "%a, %b %d").replace(tzinfo=ZoneInfo("America/Los_Angeles")).month
    day = datetime.strptime(new_date, "%a, %b %d").replace(tzinfo=ZoneInfo("America/Los_Angeles")).day
    start_str, end_str = school_year.split("-")

    if len(end_str) == 2:
        end_str = start_str[:2] + end_str
        start_year = int(start_str)
        end_year = int(end_str)

        if current_month < 7:
            active_year = end_year 
        else:
            active_year = start_year  
        
    parsed_time = datetime.strptime(time.strip(), "%I:%M %p").replace(tzinfo=ZoneInfo("America/Los_Angeles"))

    converted_time = datetime(
        active_year,
        current_month,
        day,
        parsed_time.hour,
        tzinfo=ZoneInfo("America/Los_Angeles"),
    )

    print(f"Converted time: {converted_time}")
    return converted_time