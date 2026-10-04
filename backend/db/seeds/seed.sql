-- Seed data for local development.
-- Run with: psql -d concrete_sports -v ON_ERROR_STOP=1 -f backend/seeds/seed.sql
--
-- IDs are hardcoded below and depend on RESTART IDENTITY resetting the counters
-- to 1 on every run. That is fine for a seed file, but it means you must run the
-- whole file -- never just part of it.

BEGIN;

TRUNCATE games, teams, school_aliases, schools, seasons, sports RESTART IDENTITY CASCADE;

-- ---------------------------------------------------------------------------
-- sports        id 1 = football, id 2 = boys basketball
-- ---------------------------------------------------------------------------
INSERT INTO sports (name, slug) VALUES
    ('Football',        'football'),
    ('Boys Basketball', 'boys-basketball');

-- ---------------------------------------------------------------------------
-- schools       id 1 = Concrete (the home school), 2..4 = opponents
-- ---------------------------------------------------------------------------
INSERT INTO schools (name, slug, city, state, wpa_id, is_our_school) VALUES
    ('Concrete High School',   'concrete',             'Concrete',   'WA', 43, true),
    ('La Conner High School',  'la-conner',            'La Conner',  'WA',46, false),
    ('Darrington High School', 'darrington',           'Darrington', 'WA',44, false),
    ('Cedar Park Christian',   'cedar-park-christian', 'Lynnwood',   'WA',1293, false);

-- ---------------------------------------------------------------------------
-- school_aliases
-- Every spelling a source might hand us, mapped to one canonical school.
-- These are real strings from the captured fixtures and the NFHS payload,
-- including the truncated one WPA actually returns.
-- ---------------------------------------------------------------------------
INSERT INTO school_aliases (school_id, alias) VALUES
    (1, 'Concrete'),
    (1, 'Concrete High School'),
    (2, 'La Conner (2B)'),                    -- WPA
    (2, 'La Conner High School'),             -- NFHS
    (2, 'La Conner'),
    (3, 'Darrington'),
    (3, 'Darrington High School'),
    (4, 'Cedar Park Christian (Lynnwood'),    -- WPA truncates this, unbalanced paren
    (4, 'Cedar Park Christian');

-- ---------------------------------------------------------------------------
-- seasons       id 1 = 2025-26 (past), id 2 = 2026-27 (current)
-- Format matches WPA's school_year parameter so ingest can use it directly.
-- ---------------------------------------------------------------------------
INSERT INTO seasons (school_year, is_current) VALUES
    ('2025-26', false),
    ('2026-27', true);

-- ---------------------------------------------------------------------------
-- teams         (school, sport) pairs
--   1 = Concrete football     2 = La Conner football    3 = Darrington football
--   4 = Concrete basketball   5 = Darrington basketball
-- ---------------------------------------------------------------------------
INSERT INTO teams (school_id, sport_id) VALUES
    (1, 1),
    (2, 1),
    (3, 1),
    (1, 2),
    (3, 2);

-- ---------------------------------------------------------------------------
-- games
-- Chosen to exercise the constraints, not just to fill the table:
--   1. completed game, Concrete away
--   2. completed game, Concrete home
--   3. future game, NULL scores, status 'scheduled'
--   4 & 5. same two teams twice in one season -- must be ALLOWED
--   6. postponed game, no score
-- ---------------------------------------------------------------------------
INSERT INTO games (
    season_id, sport_id, home_team_id, away_team_id,
    home_team_score, away_team_score, venue, status, starts_at
) VALUES
    -- 1. Concrete away at La Conner, final
    (1, 1, 2, 1, 34, 6, 'La Conner HS', 'final', '2025-09-19 19:00:00-07'),

    -- 2. Concrete home vs Darrington, final
    (1, 1, 1, 3, 14, 52, 'Concrete HS', 'final', '2025-10-25 18:00:00-07'),

    -- 3. next season, not yet played -- scores are NULL, not 0
    (2, 1, 1, 2, NULL, NULL, 'Concrete HS', 'scheduled', '2026-09-04 18:00:00-07'),

    -- 4 & 5. Concrete vs Darrington basketball, twice in the same season.
    -- Same (home_team_id, away_team_id) pair, different starts_at, so the
    -- UNIQUE constraint permits both. An earlier version of that constraint
    -- omitted starts_at and would have rejected row 5.
    (2, 2, 4, 5, 58, 47, 'Concrete HS', 'final', '2026-01-09 19:00:00-08'),
    (2, 2, 4, 5, 51, 63, 'Concrete HS', 'final', '2026-02-06 19:00:00-08'),

    -- 6. postponed, no scores
    (2, 2, 5, 4, NULL, NULL, 'Darrington HS', 'postponed', '2026-01-23 19:00:00-08');

COMMIT;

-- ---------------------------------------------------------------------------
-- Constraint checks -- run these MANUALLY in psql, not as part of this file.
-- Each one is supposed to FAIL. Inside the transaction above, the first error
-- would abort everything after it, so they cannot live here.
--
--   -- duplicate game: same teams, same kickoff -> rejected by UNIQUE
--   INSERT INTO games (season_id, sport_id, home_team_id, away_team_id, starts_at)
--   VALUES (1, 1, 2, 1, '2025-09-19 19:00:00-07');
--
--   -- cross-sport matchup: football team vs basketball team -> rejected by the
--   -- composite foreign key
--   INSERT INTO games (season_id, sport_id, home_team_id, away_team_id, starts_at)
--   VALUES (2, 1, 1, 5, '2026-10-01 18:00:00-07');
--
--   -- team playing itself -> rejected by CHECK
--   INSERT INTO games (season_id, sport_id, home_team_id, away_team_id, starts_at)
--   VALUES (2, 1, 1, 1, '2026-10-08 18:00:00-07');
--
--   -- unknown status ('Final' is not 'final') -> rejected by CHECK
--   INSERT INTO games (season_id, sport_id, home_team_id, away_team_id, starts_at, status)
--   VALUES (2, 1, 1, 2, '2026-10-15 18:00:00-07', 'Final');
-- ---------------------------------------------------------------------------
