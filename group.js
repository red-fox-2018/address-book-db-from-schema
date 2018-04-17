const sqlite = require('sqlite3').verbose()

class Group{

  static db() {
    return new sqlite.Database('databaseContact.db')
  }

  static show() {
    var db = this.db()
    let query = `SELECT * FROM groups`
    db.all(query, (err, groupList) => {
      if(err) {
        cb('error')
      } else {
        cb(groupList)
      }
    })
  }

  static add(objGroup, cb) {
    var db = this.db()
    let query = `INSERT INTO groups (id, groupName) VALUES (null, '${objGroup.name}')`
    db.run(query, (err, newGroup) => {
      if(err) {
        cb('error')
      } else {
        cb('add new group success')
      }
    })
  }

  static update(objGroup, cb) {
    var db = this.db()
    let query = `UPDATE groups SET name = '${objContact.setValue}' WHERE id = '${objContact.whereValue}'`
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
    let query = `DELETE FROM groups WHERE id = ${id}`
    db.run(query, (err, deletedContact) => {
      if(err) {
        cb('error')
      } else {
        cb('group deleted')
      }
    })
  }

}

module.exports = Group
