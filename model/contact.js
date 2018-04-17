const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('address_book.db');

class Contact {
  static show(callback) {
    let query = 'SELECT * FROM contacts';
    db.each(query, (err, row) => {
      let queryGroup = `SELECT groups.name FROM contact_groups JOIN contacts ON contact_groups.contactId = contacts.id JOIN groups ON groups.id = contact_groups.groupId WHERE contacts.id = ${row.id}`;
      db.all(queryGroup, (err, grup) => {
        let groupName = []
        grup.forEach(element => {
          groupName.push(element.name);
        });
        let result = `${row.id}. ${row.name}, no.telp: ${row.no_telp} group: ${groupName.join(', ')}`
        callback(result)
      })
    })
  }
  static add(name, perusahaan, no_telp, email, callback) {
    let query = `INSERT INTO contacts VALUES(null, '${name}', '${perusahaan}', ${no_telp}, '${email}')`;
    db.run(query);
    let result = 'Contact berhasil disimpan'
    callback(result)
  }
  static delete(contactId, callback) {
    let query = `DELETE FROM contacts WHERE id=${contactId}`;
    db.run(query);
    let result = 'Contact berhasil dihapus';
    callback(result)
  }
  static update(contactId, column, newData, callback) {
    let query = `UPDATE contacts SET '${column}' = '${newData}' WHERE id = ${contactId}`;
    db.run(query);
    let result = 'Contact berhasil diupdate';
    callback(result);
  }
}

module.exports = Contact;