from pathlib import Path

from app.etl.extract import parse_rows

FIXTURES = Path(__file__).parent / "fixtures"

BASKETBALL_HTML = (FIXTURES / "wpa_boys-basketball_2025-26.html").read_text()
FOOTBALL_HTML = (FIXTURES / "wpa_football_2026-27.html").read_text()


def test_row_count():
    assert len(parse_rows(BASKETBALL_HTML)) == 21
    assert len(parse_rows(FOOTBALL_HTML)) == 9
