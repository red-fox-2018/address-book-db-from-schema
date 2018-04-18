var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database.db');

class Groups {
  static save(nama, cb) {
    var query = `INSERT INTO Groups (nama) VALUES ("${nama}")`
    db.run(query, function(err) {
      if (err) {
        cb(err);
      }
    })
  }

  static update(newGroup, id, cb) {
    var query = `UPDATE Groups SET nama = "${newGroup}" WHERE group_id = ${id}`;

    db.run(query, function(err) {
      if (err) {
        cb(err);
      }
    })
  }

  static delete(id, cb) {
    var query = `DELETE FROM Groups WHERE group_id = ${id}`;
    db.run(query, function(err) {
      if (err) {
        cb(err);
      }
    })
  }

  static read(cb) {
    var query = `SELECT * FROM Groups`

    db.all(query, (err, data) => {
      if (err) {
        cb(err);
      } else {
        cb(data);
      }
    })
  }
}

module.exports = Groups;
