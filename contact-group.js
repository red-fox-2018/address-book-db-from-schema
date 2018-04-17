const sqlite = require('sqlite3').verbose()

class ContactGroup{
  static db() {
    return new sqlite.Database('databaseContact.db')
  }

  static show() {
    var db = this.db()
    let query = `SELECT * FROM group_contact`
    db.all(query, (err, group_contact) => {
      if(err) {
        cb('error')
      } else {
        cb(group_contact)
      }
    })
  }

  static add(obj, cb) {
    var db = this.db()
    let query = `INSERT INTO group_contact (id, contactId, groupId) VALUES (null, '${obj.contactId}', '${obj.groupId}')`
    db.run(query, (err, newGroupContact) => {
      if(err) {
        cb('error')
      } else {
        cb('add contact to group success')
      }
    })
  }

  static update(set, obj, cb) {
    var db = this.db()
    let query = `UPDATE group_contact SET name = '${objContact.setValue}' WHERE id = '${objContact.whereValue}'`
    db.run(query, (err, updateGroup) => {
      if(err) {
        cb('error')
      } else {
        cb('update success')
      }
    })
  }

  static delete(id, cb) {
    var db = this.db()
    let query = `DELETE FROM group_contact WHERE id = ${id}`
    db.run(query, (err, deletedGroupContact) => {
      if(err) {
        cb('error')
      } else {
        cb('group contact deleted')
      }
    })
  }

}

module.exports = ContactGroup
