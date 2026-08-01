/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `message` (text, not null) — message content
  - `created_at` (timestamp) — submission time

2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated INSERT (anyone can submit a contact form).
- No SELECT/UPDATE/DELETE for anon (admin-only reads, handled outside app).
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);
