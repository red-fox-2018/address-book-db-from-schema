var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database.db');

db.serialize(function() {
  db.run(`CREATE TABLE IF NOT EXISTS Contacts (
    contact_id integer PRIMARY KEY AUTOINCREMENT,
    nama varchar(30),
    perusahaan varchar(30),
    no_telp INT,
    email varchar(20)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS Groups (
    group_id integer PRIMARY KEY AUTOINCREMENT,
    nama varchar(30)
  )`)

  db.run(`CREATE TABLE IF NOT EXISTS ContactGroup (
    id integer PRIMARY KEY AUTOINCREMENT,
    contact_id integer,
    group_id integer
  )`)
});

db.close();
