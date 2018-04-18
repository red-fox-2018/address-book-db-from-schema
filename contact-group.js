var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database.db');

class contactGroup {
  static addGroupContactId(input, cb) {
    var queryContact = `SELECT contact_id FROM Contacts WHERE nama = "${input[0]}"`;
    db.get(queryContact, function(err, contactData) {
      if (err) {
        cb(err);
      } else {
        var queryGroup = `SELECT group_id FROM Groups WHERE nama = "${input[1]}"`;
        db.get(queryGroup, function(err, groupData) {
          if (err) {
            cb(err);
          } else {
            var queryInsert = `INSERT INTO ContactGroup (contact_id, group_id) VALUES ("${contactData.contact_id}", "${groupData.group_id}")`;
            db.run(queryInsert, function(err) {
              if (err) {
                cb(err);
              } else {
                cb('input berhasil')
              }
            })
          }
        })
      }
    })
  }
}

module.exports = contactGroup;
