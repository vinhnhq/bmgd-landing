import Database from "better-sqlite3";
import path from "node:path";

let db: Database.Database | null = null;

export function getDb() {
	if (db) return db;

	const dbPath = path.join(process.cwd(), "bmgd.db");
	db = new Database(dbPath, { verbose: console.log });

	db.pragma("foreign_keys = ON");

	return db;
}

export function closeDb() {
	if (db) {
		db.close();
		db = null;
	}
}
