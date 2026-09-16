from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_invalid_sport():
    assert client.get("/api/feetball").status_code == 404

def test_all_route():
    res = client.get('/api/all')
    assert res.status_code == 200
    sports = {g["sport"] for g in res.json()}
    assert len(sports) > 1
