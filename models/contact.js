const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('address_book.db')


class Contact {
  constructor(firstNameParam, lastNameParam, phoneParam, emailParam, addressParam, groupParam) {
    this._firstName = firstNameParam;
    this._lastName = lastNameParam;
    this._phone = phoneParam;
    this._email = emailParam;
    this._address = addressParam;
    this._group = groupParam;
  }

  static add(inputData, cb) {
    //[0] first_name [1] last_name [2] phone [3] email [4] address
    let contact = new Contact(inputData[0], inputData[1], inputData[2],
                              inputData[3], inputData[4])
    let query = `INSERT INTO contacts (firstName, lastName, phone, email, address)
                  VALUES (?, ?, ?, ?, ?)`
    console.log(contact);
    let toInput = [contact._firstName, contact._lastName, contact._phone,
                   contact._email, contact._address]
    db.run(query, toInput, (err) => {
      if (err) {
        cb(err)
      } else {
        let query = `SELECT (firstName || ' ' || lastName) as fullName
                      FROM contacts ORDER BY id DESC`;
        db.get(query, (err, row) => {
          if (err) {
            cb(err)
          } else {
            cb(err, row.fullName)
          }
        })
      }
    })
  }

  static createFullName(inputData, cb) {
    let contact = new Contact(inputData[0], inputData[1])
    let fullName = contact._firstName + ' ' + contact._lastName;
    cb(fullName)
  }
  static update(inputData, cb) {
    this.createFullName(inputData, (fullName) => {
      let col_name = inputData[2];
      let newData = inputData[3];
      let innerQuery = `SELECT id FROM contacts
                        WHERE (firstName || ' ' || lastName) = "${fullName}"`;
      let query = `UPDATE contacts SET ${col_name} = "${newData}"
                   WHERE id IN (${innerQuery})`;
      db.run(query, (err) => {
        cb(err, fullName)
      })
    })
  }

  static delete(inputData, cb) {
    this.createFullName(inputData, (fullName) => {
      let innerQuery = `SELECT id FROM contacts
                        WHERE (firstName || ' ' || lastName) = "${fullName}"`;
      let query = `DELETE FROM contacts
                   WHERE id IN (${innerQuery})`;
      db.run(query, (err) => {
        cb(err, fullName)
      })
    })
  }

  static showAll(cb) {
    let query = `SELECT * FROM contacts
                 LEFT JOIN groupContacts
                  ON contacts.id = groupContacts.contactId
                 LEFT JOIN groups
                  ON groupContacts.groupId = groups.id`;
    db.all(query, (err, rows) => {
      let allContact = [];
      for (var i = 0; i < rows.length; i++) {
        let contact = new Contact(rows[i].firstName, rows[i].lastName, rows[i].phone,
                                  rows[i].email, rows[i].address, rows[i].name)
        allContact.push(contact);
      }
      cb(err, allContact)
    })
  }
}


module.exports = Contact
