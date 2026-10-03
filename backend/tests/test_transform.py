from datetime import datetime
from zoneinfo import ZoneInfo

import pytest

from app.etl.transform import (
    derive_status,
    normalize_team_name,
    parse_score,
    parse_starts_at,
    transform_game,
)


# testing scores
@pytest.mark.parametrize(
    "raw, expected",
    [
        ("57", 57),
        ("0", 0),
        ("", None),
        (" ", None),
        ("   ", None),
        (None, None),
        ("\n", None),
    ],
)
def test_parse_score(raw, expected):
    assert parse_score(raw) == expected


# testing date and time
PT = ZoneInfo("America/Los_Angeles")


@pytest.mark.parametrize(
    "date, time, school_year, expected",
    [
        ("Fri, Sep 19", "7:00 pm", "2025-26", datetime(2025, 9, 19, 19, 0, tzinfo=PT)),
        ("Sat, Feb 6", "7:45 pm", "2025-26", datetime(2026, 2, 6, 19, 45, tzinfo=PT)),
        ("Fri, Feb 7", "4:00 pm", "2025-2026", datetime(2026, 2, 7, 16, 0, tzinfo=PT)),
    ],
)
def test_parse_starts_at(date, time, school_year, expected):
    assert parse_starts_at(date, time, school_year) == expected


# normalize team name
@pytest.mark.parametrize(
    "team_name, expected",
    [
        (" Concrete ", "Concrete"),
        ("Coupeville (2B)", "Coupeville"),
        ("South Whidbey (1A)", "South Whidbey"),
        ("Northwest Christian (Lacey)", "Northwest Christian (Lacey)"),
        ("Cedar Park Christian (Lynnwood", "Cedar Park Christian (Lynnwood)"),
        (" Cedar Park Christian (Lynnwood", "Cedar Park Christian (Lynnwood)"),
        ("Northwest Christian(Lacey)", "Northwest Christian (Lacey)"),
    ],
)
def test_normalize_team_name(team_name, expected):
    assert normalize_team_name(team_name) == expected


@pytest.mark.parametrize(
    "home_score, away_score, expected",
    [
        (75, 60, "final"),
        (None, None, "scheduled"),
        (60, None, "scheduled"),
        (None, 75, "scheduled"),
        (0, 0, "final"),
    ],
)
def test_derive_status(home_score, away_score, expected):
    assert derive_status(home_score, away_score) == expected


FINAL_GAME_RAW = {
    "date": "Fri, Dec 5",
    "time": "6:00 pm",
    "away_team": "Concrete",
    "away_team_score": "57",
    "away_wpa_id": "43",
    "home_team": "Thorp",
    "home_team_score": "58",
    "home_wpa_id": "328",
    "location": "Thorp HS",
}

UPCOMING_GAME_RAW = {
    "date": "Fri, Oct 2",
    "time": "6:00 pm",
    "away_team": "Muckleshoot Tribal School",
    "away_team_score": "",
    "away_wpa_id": "191",
    "home_team": "Concrete",
    "home_team_score": "",
    "home_wpa_id": "43",
    "location": "Concrete HS",
}

TBD_GAME_RAW = {
    "date": "Fri, Sep 25",
    "time": "7:00 pm",
    "away_team": "TBD",
    "away_team_score": "",
    "away_wpa_id": None,
    "home_team": "Concrete",
    "home_team_score": "",
    "home_wpa_id": "43",
    "location": "Concrete HS",
}


@pytest.mark.parametrize(
    "raw, sport, school_year, expected",
    [
        (
            FINAL_GAME_RAW,
            "boys-basketball",
            "2025-26",
            {
                "sport": "boys-basketball",
                "away_team": "Concrete",
                "away_team_score": 57,
                "away_wpa_id": 43,
                "home_team": "Thorp",
                "home_team_score": 58,
                "home_wpa_id": 328,
                "venue": "Thorp HS",
                "status": "final",
                "starts_at": datetime(2025, 12, 5, 18, 0, tzinfo=PT),
            },
        ),
        (
            UPCOMING_GAME_RAW,
            "football",
            "2026-27",
            {
                "sport": "football",
                "away_team": "Muckleshoot Tribal School",
                "away_team_score": None,
                "away_wpa_id": 191,
                "home_team": "Concrete",
                "home_team_score": None,
                "home_wpa_id": 43,
                "venue": "Concrete HS",
                "status": "scheduled",
                "starts_at": datetime(2026, 10, 2, 18, 0, tzinfo=PT),
            },
        ),
        (TBD_GAME_RAW, "football", "2026-27", None),
    ],
)
def test_transform_game(raw_game, sport, school_year, expected):
    assert transform_game(raw_game, sport, school_year) == expected
