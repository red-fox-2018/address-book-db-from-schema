const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/address_book.db');

class Process {
  constructor() {

  }

  static checkPhoneNumber(phone){

    if (phone.length < 15) {
      return true
    } else {
      return false
    }

  }

  static checkEmail(email){

    if (email.indexOf("@") != -1 && email.indexOf(".") != -1) {

      if (email.indexOf("@") < email.lastIndexOf(".")) {

        return true

      } else {

        return false

      }

    } else {

      return false

    }

  }

  static searchContact(name, cb){

    db.get(`SELECT id FROM contacts WHERE name LIKE "${name}"`, (err, data) => {

      if (err) {
        cb(err, null)
      } else {
        cb(null, data.id);
      }

    })

  }

  static searchGroup(name, cb){

    db.get(`SELECT id FROM groups WHERE name = "${name}"`, (err, data) => {

      if (err) {
        cb(err, null)
      } else {
        cb(null, data.id);
      }

    })

  }

  static deleteGroup(idGroup, cb){

    db.all(`DELETE FROM contact_group WHERE id_group = ${idGroup}`, (err, deleted) => {

      if (err) {
        cb(err, null)
      } else {
        cb(`group deleted`)
      }

    })

  }

}

module.exports = Process;
