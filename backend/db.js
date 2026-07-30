const { Pool } = require('pg');

let pool;

function getPool() {
  if (!pool) {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      return null;
    }
    pool = new Pool({
      connectionString: dbUrl,
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 10000,
      idleTimeoutMillis: 30000
    });
    pool.on('error', (err) => {
      console.error('Unexpected pool error:', err.message);
    });
  }
  return pool;
}

async function query(text, params) {
  const p = getPool();
  if (!p) throw new Error('Database unavailable');
  return p.query(text, params);
}

async function initDb() {
  const p = getPool();
  if (!p) {
    console.log('Skipping DB init (no DATABASE_URL)');
    return;
  }
  try {
    const fs = require('fs');
    const path = require('path');
    const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    await p.query(schema);
    console.log('Database initialized');
  } catch (err) {
    console.error('Database init error (non-fatal):', err.message);
  }
}

function isDbReady() {
  return !!getPool();
}

module.exports = { getPool, query, initDb, isDbReady };
