"use strict"
const db = require('../libraries/database');

class Group {
  static getData(callback) {
    let query = `SELECT * FROM Groups;`;

    db.all(query, (err, rows) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, rows);
      }
    });
  }

  static save(name, callback) {
    let query = `INSERT INTO Groups
                 VALUES (NULL, '${name}');`;
    let statusMessage = `Group ${name} has been created`;

    db.run(query, err => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, statusMessage);
      }
    });
  }

  static update(id, name, callback) {
    db.all(`SELECT * FROM Groups WHERE id = ${id};`, (err, rows) => {
      let statusMessage;
      if (rows.length === 0) {
        statusMessage = `There is no group with id ${id}`;
        callback(null, statusMessage);
      } else {
        let query = `UPDATE Groups
                     SET name = '${name}'
                     WHERE id = ${id};`;

        db.run(query, err => {
          if (err) {
            callback(err, null);
          } else {
            statusMessage = `The group with id ${id} has been updated`;
          }

          callback(null, statusMessage);
        });
      }
    });
  }

  static delete(id, callback) {
    db.all(`SELECT * FROM Groups WHERE id = ${id};`, (err, rows) => {
      let statusMessage;

      if (rows.length === 0) {
        statusMessage = `There is no group with id ${id}`;
        callback(null, statusMessage);
      } else {
        let queryDelete = `DELETE FROM Groups
                           WHERE id = ${id};`;

        db.run(queryDelete, err => {
          if (err) {
            callback(err, null);
          } else {
            statusMessage = `The group with id ${id} has been deleted`;
          }

          callback(null, statusMessage);
        });
      }
    });
  }
}

module.exports = Group;