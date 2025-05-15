import Database from 'better-sqlite3';
import path from 'node:path';

export async function openDb() {
  const dbPath = path.join(process.cwd(), 'bmgd.db');
  return new Database(dbPath, { verbose: console.log });
}
