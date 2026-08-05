# FastAPI() + include routers
from fastapi import FastAPI

app = FastAPI()

@app.get("/api/all")
def get_all_games():
    return [
        {"id": 1, "sport": "football", "opponent": "La Conner", "concrete_score": 6},
        {"id": 2, "sport": "football", "opponent": "Darrington", "concrete_score": 44}
    ]