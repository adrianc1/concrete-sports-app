from bs4 import BeautifulSoup
import httpx


def fetch(url: str) -> str:
    res = httpx.get(url)
    print(res.text)


def parse_rows(html: str) -> dict:
    soup = BeautifulSoup(html, "html.parser")
    rows = soup.select(".event_row")
    return rows


if __name__ == "__main__":
    print(__name__)

    # fetch("https://www.python-httpx.org/")
