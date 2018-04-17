const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('address_book.db')

class Group {
  constructor() {

  }

  static assignGroup(contactId, groupName, cb) {
    let query = `SELECT id FROM groups WHERE name = "${groupName}"`
    db.get(query, (err, row) => {
      if (err) {
        cb(err)
      } else {
        let groupId = row.id;
        let innerQuery = `SELECT id FROM groupContacts
                          WHERE contactId = ${contactId} AND groupId IS NULL`;
        let query = `UPDATE groupContacts SET groupId = ${groupId}
                     WHERE id IN (${innerQuery})`
        db.run(query, (err) => {
          cb(err)
        })
      }
    })
  }
}

module.exports = Group
