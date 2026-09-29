import pytest 
from app.etl.transform import parse_score

@pytest.mark.parametrize("raw, expected", [
    ("57", 57),
    ("0", 0),
    ("", None),
    (" ", None),
    (None, None),
    ("   ", None),
    ("\n", None),
])

def test_parse_score(raw, expected):
    assert parse_score(raw) == expected