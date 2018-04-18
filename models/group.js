const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('address_book.db')

class Group {
  constructor(nameParam) {
    this._name = nameParam
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

  static addGroup(newGroupName, cb) {
    let query =`INSERT INTO groups VALUES(NULL, ?)`
    db.run(query, newGroupName, (err) => {
      cb(err)
    })
  }

  static deleteGroup(groupName, cb) {
    //select groupId => del from conjunct then from groups
    db.serialize(() => {
      let query = `SELECT id FROM groups
      WHERE name = "${groupName}"`
      db.get(query, (err, row) => {
        if (err) {
          cb(err)
        } else {
          let groupId = row.id;
          let queryDelConjunc = `DELETE FROM groupContacts
          WHERE groupId = ${groupId}`;
          let queryDelGroup = `DELETE FROM groups
          WHERE id = ${groupId}`;
          db.run(queryDelGroup, (err) => {
            if (err) {
              cb(err)
            } else {
              db.run(queryDelConjunc, (err) => {
                cb(err)
              })
            }
          })
        }
      })
    })
  }
}

module.exports = Group
