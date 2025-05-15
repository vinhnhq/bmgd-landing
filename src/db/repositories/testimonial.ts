import type { FormValues } from "@/components/testimonials/CreateButton";
import type Database from "better-sqlite3";
import { randomUUID } from "node:crypto";
import { getDb } from "../connection";
import { CREATE_TESTIMONIAL_TABLE_SQL, type TestimonialRecord } from "../schema/testimonial";

export class TestimonialRepository {
  private db: Database.Database;

  constructor() {
    this.db = getDb();
    this.init();
  }

  private init() {
    this.db.exec(CREATE_TESTIMONIAL_TABLE_SQL);
  }

  async create(data: FormValues): Promise<TestimonialRecord> {
    const stmt = this.db.prepare(`
      INSERT INTO testimonials (id, name, email, occupation, company, comment)
      VALUES (?, ?, ?, ?, ?, ?)
      RETURNING *
    `);

    const result = stmt.get(
      randomUUID(),
      data.name,
      data.email || null,
      data.occupation || null,
      data.company || null,
      data.comment
    ) as TestimonialRecord;

    return result;
  }

  async findAll(): Promise<TestimonialRecord[]> {
    const stmt = this.db.prepare("SELECT * FROM testimonials ORDER BY created_at DESC");
    return stmt.all() as TestimonialRecord[];
  }

  async findById(id: string): Promise<TestimonialRecord | null> {
    const stmt = this.db.prepare("SELECT * FROM testimonials WHERE id = ?");
    return stmt.get(id) as TestimonialRecord | null;
  }

  async update(id: string, data: Partial<FormValues>): Promise<TestimonialRecord | null> {
    const testimonial = await this.findById(id);
    if (!testimonial) return null;

    const updates = Object.entries(data)
      .filter(([_, value]) => value !== undefined)
      .map(([key]) => `${key} = @${key}`)
      .join(", ");

    if (!updates) return testimonial;

    const stmt = this.db.prepare(`
      UPDATE testimonials
      SET ${updates}, updated_at = CURRENT_TIMESTAMP
      WHERE id = @id
      RETURNING *
    `);

    return stmt.get({ id, ...data }) as TestimonialRecord;
  }

  async delete(id: string): Promise<boolean> {
    const stmt = this.db.prepare("DELETE FROM testimonials WHERE id = ?");
    const result = stmt.run(id);
    return result.changes > 0;
  }
}
