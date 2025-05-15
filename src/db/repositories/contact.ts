import type { FormValues } from "@/components/contact/schema";
import type Database from "better-sqlite3";
import { getDb } from "../connection";
import { CREATE_CONTACT_TABLE_SQL, type ContactRecord } from "../schema/contact";

export class ContactRepository {
	private db: Database.Database;

	constructor() {
		this.db = getDb();
		this.init();
	}

	private init() {
		this.db.exec(CREATE_CONTACT_TABLE_SQL);
	}

	async create(data: FormValues): Promise<ContactRecord> {
		const { datetime, type, ...rest } = data;

		const stmt = this.db.prepare(`
      INSERT INTO contacts (name, phone, email, type, other_type, datetime_date, datetime_time) VALUES (?, ?, ?, ?, ?, ?, ?)
      RETURNING *
    `);

		const result = stmt.get(
			rest.name,
			rest.phone,
			rest.email,
			JSON.stringify(type),
			rest.otherType,
			datetime.date.toISOString(),
			datetime.time,
		) as ContactRecord;

		return result;
	}

	async findAll(): Promise<ContactRecord[]> {
		const stmt = this.db.prepare("SELECT * FROM contacts ORDER BY created_at DESC");
		return stmt.all() as ContactRecord[];
	}
}
