const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('address_book.db');
class Group {
  static show(callback) {
    let query = 'SELECT * FROM groups';
    db.each(query, (err, row) => {
      let queryContact = `SELECT contacts.name FROM contact_groups JOIN groups ON contact_groups.groupId = groups.id JOIN contacts ON contacts.id = contact_groups.contactId WHERE groups.id = ${row.id}`
      db.all(queryContact, (err, human) => {
        // console.log(grup)
        let humanName = []
        human.forEach(element => {
          humanName.push(element.name);
        });
        let result = `${row.id}. ${row.name}, Member: ${humanName.join(', ')}`
        callback(result);
      })
    })
  }
  static add(name, callback) {
    let query = `INSERT INTO groups VALUES(null, '${name})`;
    db.run(query);
    let result = 'Group berhasil dibuat'
    callback(result)
  }
  static delete(groupId, callback) {
    let query = `DELETE FROM groups WHERE id=${groupId}`;
    db.run(query);
    let result = 'Group berhasil dihapus';
    callback(result)
  }
  static update(groupId, column, newData, callback) {
    let query = `UPDATE groups SET '${column}' = '${newData}' WHERE id = ${groupId}`;
    db.run(query);
    let result = 'Group berhasil diupdate';
    callback(result);
  }
  static assign(groupId, contactId, callback) {
    let query = `INSERT INTO contact_groups VALUES(null, ${contactId}, ${groupId})`;
    db.run(query)
    let result = 'Member sudah ditambahkan';
    callback(result);
  }
}

module.exports = Group;