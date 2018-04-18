"use strict"
const db = require('../libraries/database');

class ContactGroup {
  static addContact(groupName, contactName, callback) {
    db.get(`SELECT id FROM Groups WHERE name = '${groupName}';`, (err, group) => {
      db.get(`SELECT id FROM Contacts WHERE name = '${contactName}';`, (err, contact) => {
        let query = `INSERT into Contact_Group
                     VALUES (NULL, '${contact.id}', '${group.id}');`;
        let statusMessage = `${contactName} has been added to the ${groupName} group`;
        db.run(query, err => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, statusMessage);
          }
        });
      });
    });
  }

  static deleteGroup(id) {
    let queryDelete = `DELETE FROM Contact_Group 
                       WHERE (SELECT id FROM Groups WHERE id = ${id}) = group_id;`;
    db.run(queryDelete);
  }
}

module.exports = ContactGroup;