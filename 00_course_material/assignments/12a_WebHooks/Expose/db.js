import sqlite3Module from 'sqlite3';

const sqlite3 = sqlite3Module.verbose();
const db = new sqlite3.Database('./webhooks.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS webhooks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url TEXT NOT NULL,
      event TEXT NOT NULL
    )
  `);
});

export default db;
