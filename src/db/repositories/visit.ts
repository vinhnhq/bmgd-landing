import type Database from "better-sqlite3";
import { getDb } from "../connection";
import { CREATE_VISIT_TABLE_SQL, type VisitRecord } from "../schema/visit";

export class VisitRepository {
	private db: Database.Database;

	constructor() {
		this.db = getDb();
		this.init();
	}

	private init() {
		this.db.exec(CREATE_VISIT_TABLE_SQL);
	}

	async incrementVisit(path: string): Promise<VisitRecord> {
		const stmt = this.db.prepare(`
      INSERT INTO visits (path, count)
      VALUES (?, 1)
      ON CONFLICT (path) DO UPDATE
      SET count = count + 1,
          updated_at = CURRENT_TIMESTAMP
      RETURNING *
    `);

		return stmt.get(path) as VisitRecord;
	}

	async getVisitCount(path: string): Promise<number> {
		const stmt = this.db.prepare("SELECT count FROM visits WHERE path = ?");
		const result = stmt.get(path) as { count: number } | null;
		return result?.count ?? 0;
	}

	async getAllVisits(): Promise<VisitRecord[]> {
		const stmt = this.db.prepare("SELECT * FROM visits ORDER BY count DESC");
		return stmt.all() as VisitRecord[];
	}

	async resetCount(path: string): Promise<boolean> {
		const stmt = this.db.prepare(`
      UPDATE visits
      SET count = 0,
          updated_at = CURRENT_TIMESTAMP
      WHERE path = ?
    `);
		const result = stmt.run(path);
		return result.changes > 0;
	}
}
