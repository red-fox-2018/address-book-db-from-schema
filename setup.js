const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('address_book.db');


class Setup {
  constructor() {

  }

  static createContacts(contacts) {
    let query = `CREATE TABLE IF NOT EXISTS contacts (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  firstName TEXT,
                  lastName TEXT,
                  phone TEXT,
                  email TEXT,
                  address TEXT
    )`;
    db.serialize(() => {
      db.run(query, (err) => {
        if (err) console.log(err);
      })
      let stmt = db.prepare(`INSERT INTO contacts (firstName, lastName, phone, email, address)
                          VALUES (?, ?, ?, ?, ?)`);
      for (var i = 0; i < contacts.length; i++) {
        stmt.run(contacts[i][0], contacts[i][1], contacts[i][2], contacts[i][3], contacts[i][4],
        (err) => {
          if (err) console.log(err);
        });
      }
      stmt.finalize();
    })
    db.close();
  }

  static createGroups(groups) {
    let query = `CREATE TABLE IF NOT EXISTS groups (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  name TEXT
    )`
    db.serialize(() => {
      db.run(query, (err) => {
        if (err) console.log(err);
      })
      let stmt = db.prepare(`INSERT INTO groups VALUES (null, ?)`);
      for (var i = 0; i < groups.length; i++) {
        stmt.run(groups[i], (err) => {
          if (err) console.log(err);
        })
      }
      stmt.finalize()
    })
    db.close()
  }

  static createGroupContacts(groupContacts) {
    let query = `CREATE TABLE IF NOT EXISTS groupContacts (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  contactId INTEGER,
                  groupId INTEGER
    )`;
    db.serialize(() => {
      db.run(query, (err) => {
        if(err) console.log(err);
      })
      let stmt = db.prepare(`INSERT INTO groupContacts VALUES (null, ?, ?)`);
      for (var i = 0; i < groupContacts.length; i++) {
        stmt.run(groupContacts[i][0], groupContacts[i][1], (err) => {
          if(err) console.log(err);
        })
      }
      stmt.finalize()
    })
    db.close();
  }
}


var contacts = [
                ['John', 'Doe', '08123456789', 'john_d@gmail.com', 'Jakarta'],
                ['Sebas', 'Tian', '0866666666', 'sebas@new_world.com', 'Nazarik'],
                ['Kuro', 'Neko', '08473827184', 'nekoneko@outlook.com', 'nekojima']
]

var groups = ['VRMMO', 'ARMMO']

var groupContacts = [[1, 1], [2, 1], [2, 2], [3, 2]]
// Setup.createContacts(contacts);
// Setup.createGroups(groups);
Setup.createGroupContacts(groupContacts);
