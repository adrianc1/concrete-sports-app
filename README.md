# Concrete Lions Sports App

A full-stack Progressive Web App built for [Concrete High School](https://concretesports.app/) (Concrete, WA) to centralize athletic information, surface real-time game data, and connect the school's community with local business sponsors.

**Live:** [concretesports.app](https://concretesports.app/) · **215+ active community users**

---

## Overview

Concrete is a small, rural community in Washington state. The athletic program had no centralized digital presence, schedules lived on flyers, scores were word-of-mouth, and local businesses had no affordable way to support the school publicly. This app solves all three.

Built as a real client engagement, the app serves students, families, coaches, and local sponsors through a single installable PWA.

---

## Features

- **Live Scores & Records** — Recent game results with final scores, opponent, location, and W/L record per sport
- **Upcoming Games** — Automatically surfaced from the pipeline; transitions to "Recent" post-game
- **Team Schedules** — Season-organized by Fall, Winter, and Spring across all varsity sports (Football, Volleyball, Boys/Girls Basketball, Wrestling, Baseball, Softball)
- **Athlete Spotlight** — Monthly athlete recognition section automatically updated once voted on by the Booster Club. 
- **Sponsor Directory** — Local business listings with outbound links to sponsor websites, creating a community fundraising loop
- **Coach Connect** — Contact directory for coaching staff and booster club information
- **PWA** — Installable on iOS and Android for a native app experience; no App Store required

---

## Automated Data Pipeline

The core backend feature is a scheduled ETL pipeline that keeps all game data current without any manual input.

**How it works:**

1. A Node.js cron job runs daily and hits the **WIAA/WPA Network API** (Washington Interscholastic Activities Association), the official state athletic data source
2. The raw response is transformed and normalized - cleaning inconsistencies in sport names, dates, scores, and opponent data
3. Processed records are **upserted into MongoDB**, preventing duplicates while keeping data current
4. The React frontend reads game state and automatically routes records to the correct UI section, upcoming games surface in the "Upcoming" feed; completed games move to "Recent Scores"

This means the school never manually enters a score.

---

## Tech Stack

| Layer         | Technology                                                        |
| ------------- | ----------------------------------------------------------------- |
| Frontend      | React, Vite, Tailwind CSS, shadcn/ui                              |
| Backend       | Node.js, Express - REST API (`GET /api/:sport`, `POST /api/sync`) |
| Database      | MongoDB                                                           |
| Scraping      | Cheerio + native fetch                                            |
| Scheduling    | node-cron (daily ETL)                                             |
| External Data | WIAA / WPA Network                                                |
| Deployment    | Netlify (frontend), Railway (backend), PWA (installable)          |
| Analytics     | Google Analytics                                                  |

---

## Architecture Notes

- **Upsert pattern** — MongoDB `bulkWrite` with `updateOne + upsert: true` — batch upserts prevent duplication across daily cron runs while keeping writes efficient
- **State-driven rendering** — Game results are scraped from WIAA daily via a cron job and upserted into
  MongoDB — upcoming games store a TBD result that gets overwritten
  automatically once scores are posted by the source
- **External API normalization** — The WIAA feed returns sport-specific inconsistencies; the transformation layer standardizes shape before persistence

---

## Background

The school approached this project with a clear community need: raise visibility for their athletic program, give local businesses a way to contribute, and give families a reliable place to follow their kids' seasons. The app has served 215+ users since launch across the Concrete, WA community.
