var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database.db');

class Contact {
  static save(nama, perusahaan, no_telp, email, callback) {
    var query = `INSERT INTO Contacts (nama, perusahaan, no_telp, email) VALUES ("${nama}", "${perusahaan}", "${no_telp}", "${email}")`
    db.run(query, function(err) {
      if (err) {
        callback(err);
      }
    })
  }

  static update(property, id, newName, callback) {
    var query = `UPDATE Contacts SET ${property} = "${newName}" WHERE contact_id = ${id}`;
    db.run(query, function(err) {
      if (err) {
        callback(err);
      }
    })
  }

  static read(callback) {
    var query = `SELECT * FROM Contacts`;
    db.all(query, function(err, data) {
      if (err) {
        callback(err)
      } else {
        callback(data);
      }
    })
  }

  static delete(id, callback) {
    var query = `DELETE FROM Contacts WHERE contact_id = ${id}`;

    db.run(query, function(err) {
      if (err) {
        callback(err);
      }
    })
  }
}

module.exports = Contact;
