# Frontend migration checklist

React changes needed when the app switches from the Express/Mongo API to the
Python/Postgres one. Do this as its own phase, after the Python backend is deployed
and verified.

Diffed `GET /api/all` from FastAPI against `backend/tests/fixtures/all_games.json`.

## Payload changes

Unchanged: `sport`, `opponent`, `concrete_score`, `opponent_score`, `home_away`,
`location`.

| Old                        | New                                                    |
| -------------------------- | ------------------------------------------------------ |
| `_id`                      | `id`                                                   |
| `date`, `time`             | `starts_at` (ISO 8601, tz-aware)                       |
| `result` (`"57 - 58 L"`)   | removed — use `status` + the two scores                |
| `concrete`                 | removed (always `"Concrete"`)                          |
| `home_team`, `away_team`   | removed (always `null`)                                |
| `createdAt`, `updatedAt`   | removed from payload (still stored)                    |
| —                          | `status`: scheduled / final / postponed / cancelled    |

Anything else showing up in a diff is a bug.

## Files

**`src/layout/RecentGames.jsx`**

- [ ] L82 `result !== 'TBD'` → `status === 'final'`
- [ ] L83 sort on `starts_at`
- [ ] L89 `game._id` → `game.id`
- [ ] L103 format `starts_at`

**`src/components/homePage/UpcomingGames.jsx`**

- [ ] L81 `result === 'TBD'` → `status === 'scheduled'`
- [ ] L82 sort on `starts_at`
- [ ] L101, L109-110 format `starts_at`, drop `game.time`

**`src/components/schedulePage/SchedulePage.jsx`**

- [ ] L10 sort on `starts_at`
- [ ] L48 `isPlayed(game.result)` → `status === 'final'`
- [ ] L54, L75 `accentColor(game.result)` → derive from scores
- [ ] L57-58 format `starts_at`

**`src/components/schedulePage/WrestlingSchedule.jsx`**

- [ ] L12-16 `result.includes('W')` → compare scores
- [ ] L12 remove leftover `console.log`

**`src/utils/recordKeeper.js`**

- [ ] L6-8 `result.includes('W'/'L')` → compare scores

Season records currently come from substring-matching a display string, so an
opponent name containing "W" or "L" corrupts the record.

## Extract while doing this

Date formatting is duplicated across three files and W/L derivation across two.
`result` was hiding both.

- [ ] `formatGameDate(startsAt)`
- [ ] `gameOutcome(game)` → `'W' | 'L' | 'T' | null`

## Verify

- [ ] Run both backends side by side, diff `/api/all`
- [ ] Season records match the live site
- [ ] Upcoming vs Recent bucketing unchanged
- [ ] Postponed / cancelled games render sensibly (new states)
