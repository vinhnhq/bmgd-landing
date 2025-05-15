import { z } from "zod";

export const visitSchema = z.object({
	id: z.number(),
	path: z.string(),
	count: z.number(),
	created_at: z.string().datetime(),
	updated_at: z.string().datetime(),
});

export type VisitRecord = z.infer<typeof visitSchema>;

export const CREATE_VISIT_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS visits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    path TEXT NOT NULL UNIQUE,
    count INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`;
