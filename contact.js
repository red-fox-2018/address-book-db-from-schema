const sqlite = require('sqlite3').verbose()

class Contact{

  static db() {
    return new sqlite.Database('databaseContact.db')
  }

  static show(cb) {
    var db = this.db()
    let query = `SELECT * FROM contacts`
    db.all(query, (err, contactList) => {
      if(err) {
        cb('error')
      } else {
        cb(contactList)
      }
    })
  }

  static add(objContact, cb) {
    var db = this.db()
    let query = `INSERT INTO contacts (id, name, company, phone_number, email) VALUES (null, '${objContact.name}', '${objContact.company}', '${objContact.phone_number}', '${objContact.email}')`
    db.run(query, (err, newContact) => {
      if(err) {
        cb('error')
      } else {
        cb('add new contact success')
      }
    })
  }

  static update(objContact, cb) {
    var db = this.db()
    let query = `UPDATE contacts SET ${objContact.set} = '${objContact.setValue}' WHERE ${objContact.where} = '${objContact.whereValue}'`
    db.run(query, (err, updateContact) => {
      if(err) {
        cb('error')
      } else {
        cb('update success')
      }
    })
  }

  static delete(id, cb) {
    var db = this.db()
    let query = `DELETE FROM contacts WHERE id = ${id}`
    db.run(query, (err, deletedContact) => {
      if(err) {
        cb('error')
      } else {
        cb('deleted contact')
      }
    })
  }

}

module.exports = Contact
