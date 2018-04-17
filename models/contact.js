"use strict"
const db = require('../libraries/database');

class Contact {
  static getData(callback) {
    let query = `SELECT * FROM Contacts;`;

    db.all(query, (err, rows) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, rows);
      }
    });
  }

  static save(name, company, email, phone, callback) {
    let query = `INSERT INTO Contacts
                 VALUES (NULL, '${name}', '${company}', '${email}', '${phone}');`;
    let statusMessage = `${name} has added to the contact`;

    db.run(query, err => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, statusMessage);
      }
    });
  }

  static update(column, value, id, callback) {
    db.all(`SELECT * FROM Contacts WHERE id = ${id};`, (err, rows) => {
      let statusMessage;
      if (rows.length === 0) {
        statusMessage = `There is no contact with id ${id}`;
        callback(null, statusMessage);
      } else {
        let query = `UPDATE Contacts
                     SET ${column} = '${value}'
                     WHERE id = ${id};`;

        db.run(query, err => {
          if (err) {
            callback(err, null);
          } else {
            statusMessage = `The contact with id ${id} has been updated`;
          }
          
          callback(null, statusMessage);
        });
      }
    });
  }

  static delete(id, callback) {
    db.all(`SELECT * FROM Contacts WHERE id = ${id};`, (err, rows) => {
      let statusMessage;

      if (rows.length === 0) {
        statusMessage = `There is no contact with id ${id}`;
        callback(null, statusMessage);
      } else {
        let queryDelete = `DELETE FROM Contacts
                           WHERE id = ${id};`;

        db.run(queryDelete, err => {
          if (err) {
            callback(err, null);
          } else {
            statusMessage = `The contact with id ${id} has been deleted`;
          }

          callback(null, statusMessage);
        });
      }
    });
  }
}

module.exports = Contact;