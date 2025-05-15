import Database from "better-sqlite3";
import path from "node:path";
import { cwd } from "node:process";

// Prevent connection caching between requests
const getConnection = () => {
	const dbPath = process.env.DB_PATH
		? path.resolve(process.env.DB_PATH)
		: path.resolve(cwd(), process.env.NODE_ENV === 'production' ? 'bmgd-prod.db' : 'bmgd-dev.db');

	console.log('[DB] Connecting to:', dbPath);
	console.log('[DB] Environment:', process.env.NODE_ENV);

	const db = new Database(dbPath, {
		verbose: console.log
	});

	db.pragma("foreign_keys = ON");
	return db;
};

// Get a fresh connection for each request
export function getDb() {
	return getConnection();
}

export function closeDb() {
	try {
		const db = getConnection();
		db.close();
	} catch (error) {
		console.error('[DB] Error closing connection:', error);
	}
}
