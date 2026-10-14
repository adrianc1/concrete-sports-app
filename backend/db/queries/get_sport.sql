SELECT g.id as id, 
sp.slug as sport,
g.venue as location,
g.status as status,
g.starts_at as starts_at,
    CASE WHEN hs.is_our_school THEN as_.name ELSE hs.name END AS opponent, 
    CASE WHEN hs.is_our_school THEN g.home_team_score ELSE g.away_team_score END AS concrete_score,
    CASE WHEN hs.is_our_school THEN g.away_team_score ELSE g.home_team_score END AS opponent_score,
    CASE WHEN hs.is_our_school THEN 'Home' ELSE 'Away' END AS home_away     
FROM games g 
JOIN teams ht ON ht.id = g.home_team_id
JOIN teams at ON at.id = g.away_team_id
JOIN schools hs ON hs.id = ht.school_id
JOIN schools as_ ON as_.id = at.school_id   
JOIN sports sp ON sp.id = g.sport_id
WHERE sp.slug = :sport
ORDER BY starts_at DESC;
