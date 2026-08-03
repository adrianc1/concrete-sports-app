
DROP TABLE IF EXISTS games, teams, school_aliases, schools, seasons, sports CASCADE;

CREATE TABLE sports (
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
name TEXT NOT NULL, -- girls basketball, baseball, etc.
slug TEXT NOT NULL UNIQUE -- /girls-basketball/, /baseball/,..
);

CREATE TABLE schools (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL, -- Concrete Lions 
    slug TEXT NOT NULL UNIQUE, -- /concrete-lions
    city TEXT, -- Concrete
    state CHAR(2), -- WA
    is_our_school BOOLEAN NOT NULL DEFAULT false -- school's app
);

CREATE TABLE seasons (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    school_year TEXT NOT NULL DEFAULT '2026-2027',
    is_current BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE school_aliases (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    school_id INT references schools(id),
    alias TEXT NOT NULL,
    UNIQUE(alias)
);

CREATE TABLE teams (
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
school_id INT NOT NULL references schools(id),
sport_id INT NOT NULL references sports(id),
UNIQUE(school_id, sport_id),
UNIQUE (id, sport_id)
);

CREATE TABLE games (
id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY ,
season_id INT NOT NULL references seasons(id),
home_team_id INT NOT NULL references teams(id),
away_team_id INT NOT NULL references teams(id),
home_team_score INT,
away_team_score INT,
venue TEXT,
status TEXT NOT NULL DEFAULT 'scheduled',
    CHECK(status IN ('scheduled', 'final', 'postponed', 'cancelled')),
starts_at TIMESTAMPTZ NOT NULL,
created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
sport_id INT NOT NULL REFERENCES sports(id),
FOREIGN KEY (home_team_id, sport_id) REFERENCES teams (id, sport_id),
FOREIGN KEY (away_team_id, sport_id) REFERENCES teams (id, sport_id),
CHECK(home_team_id <> away_team_id),
UNIQUE(home_team_id, away_team_id, starts_at)
);

CREATE UNIQUE INDEX one_home_school ON schools (is_our_school) WHERE is_our_school;
