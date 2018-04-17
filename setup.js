const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('database.db')

db.serialize(()=>{
  db.run(`CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR, company VARCHAR, telephoneNumber INTEGER, email VARCHAR UNIQUE)`)
  db.run(`CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR)`)
  db.run(`CREATE TABLE IF NOT EXISTS groups_contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, contactsId INTEGER, groupsId INTEGER, FOREIGN KEY (contactsId) REFERENCES contacts(id), FOREIGN KEY (groupsId) REFERENCES groups(id))`)
})
db.close()
