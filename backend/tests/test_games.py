from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_invalid_sport():
    assert client.get("/api/feetball").status_code == 404