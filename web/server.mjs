import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT || 4040);

const db = new DatabaseSync(path.join(__dirname, "data", "signals.sqlite"));
db.exec("PRAGMA journal_mode = WAL");
db.exec(`
CREATE TABLE IF NOT EXISTS submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  use_case TEXT NOT NULL,
  pain TEXT NOT NULL,
  willingness_to_pay TEXT,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_submissions_created_at ON submissions(created_at DESC);
`);

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/healthz", (_req, res) => {
  res.json({ ok: true, service: "problem-signal-service", now: Date.now() });
});

app.post("/api/submit", (req, res) => {
  const email = String(req.body?.email || "").trim().toLowerCase();
  const useCase = String(req.body?.use_case || "").trim();
  const pain = String(req.body?.pain || "").trim();
  const wtp = String(req.body?.willingness_to_pay || "").trim();

  if (!email || !useCase || !pain) {
    return res.status(400).json({ ok: false, error: "email,use_case,pain_required" });
  }
  if (!email.includes("@")) {
    return res.status(400).json({ ok: false, error: "invalid_email" });
  }

  db.prepare(
    "INSERT INTO submissions (email, use_case, pain, willingness_to_pay, created_at) VALUES (?, ?, ?, ?, ?)"
  ).run(email, useCase, pain, wtp || null, Date.now());

  return res.json({ ok: true });
});

app.get("/api/stats", (_req, res) => {
  const total = db.prepare("SELECT COUNT(*) AS c FROM submissions").get().c;
  const byUseCase = db
    .prepare(
      "SELECT use_case, COUNT(*) AS c FROM submissions GROUP BY use_case ORDER BY c DESC, use_case ASC LIMIT 20"
    )
    .all();
  const latest = db
    .prepare(
      "SELECT email, use_case, pain, willingness_to_pay, created_at FROM submissions ORDER BY created_at DESC LIMIT 10"
    )
    .all();
  res.json({ ok: true, total, by_use_case: byUseCase, latest });
});

app.listen(PORT, () => {
  console.log(`[problem-signal-service] listening on http://127.0.0.1:${PORT}`);
});
