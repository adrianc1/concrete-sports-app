BEGIN;

TRUNCATE games, teams, school_aliases, schools, seasons, sports RESTART IDENTITY CASCADE;

INSERT INTO sports (name, slug) VALUES
('football', '/football');

INSERT INTO schools (name, slug, city, state, is_home) VALUES ('concrete lions', 'concrete', 'concrete', 'WA', true);

