
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./address-book.db');

class ContactsModel {
  static addOne(name, company, phone, email, callback) {
    db.run(`INSERT INTO Contacts VALUES (null, ?, ?, ?, ?)`, name, company, phone, email, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(1);
      }
    });
  }
  static getAll(callback) {
    db.all(`SELECT * FROM Contacts`, (err, rows) => {
      console.log(err)
      callback(rows);
    });
  }
  static findById(id, callback) {
    db.get(`SELECT * FROM Contacts WHERE id = ?`, id, (err, row) => {
      if (err) {
        callback(err);
      } else {
        callback(row);
      }
    });
  }
  static deleteById(id, callback) {
    db.run(`DELETE FROM Contacts WHERE id = ?`, id, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(1);
      }
    });
  }
  static updateById(id, name, company, phone, email, callback) {
    let sqlUpdateCompany = `UPDATE Contacts SET name = ?, company = ?, phone = ?, email = ? WHERE id = ?`;
    db.run(sqlUpdateCompany, name, company, phone, email, id, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(1);
      }
    });
  }
}

module.exports = ContactsModel;