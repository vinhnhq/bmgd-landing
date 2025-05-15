import type { FormValues } from "@/components/contact/schema";

export type ContactRecord = FormValues & {
	id: number;
	created_at: string;
	updated_at: string;
};

export const CREATE_CONTACT_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    type TEXT NOT NULL,
    other_type TEXT,
    datetime_date TEXT NOT NULL,
    datetime_time TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`;
