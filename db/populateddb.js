#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT,
  username VARCHAR(255),
  added TIMESTAMP
);

INSERT INTO messages (text, username, added) VALUES 
('Hi there!', 'Amando', '2026-07-30 12:25:10.713772'),
('Hello World!', 'Charles', '2026-07-30 12:25:10.713772');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
    ssl: true,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();