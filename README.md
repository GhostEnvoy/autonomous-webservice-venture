# Autonomous Webservice Venture

One-off deliverable: **Problem Signal** webservice.

## What it does
- Landing page to collect user pain points
- Waitlist-like lead capture (`email`, `use_case`, `pain`, optional willingness to pay)
- Local SQLite storage
- Stats endpoint for demand analysis

## Run
```bash
cd web
npm install
npm start
```

Open: `http://127.0.0.1:4040`

## API
- `GET /healthz`
- `POST /api/submit`
- `GET /api/stats`
