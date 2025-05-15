export const CREATE_TESTIMONIAL_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS testimonials (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT,
    occupation TEXT,
    company TEXT,
    comment TEXT NOT NULL,
    rating INTEGER DEFAULT 5,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`;

export interface TestimonialRecord {
  id: string;
  name: string;
  email: string | null;
  occupation: string | null;
  company: string | null;
  comment: string;
  rating: number;
  created_at: string;
  updated_at: string;
}
