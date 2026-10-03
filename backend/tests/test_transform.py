from datetime import datetime
from zoneinfo import ZoneInfo

import pytest

from app.etl.transform import parse_score, parse_starts_at


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
