const { text } = require("express");
const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertMessage(text, username, date) {
  await pool.query("INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)", [text, username, date]);
}

module.exports = {
  getAllMessages,
  insertMessage
};