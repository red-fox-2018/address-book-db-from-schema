const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/address_book.db');
const Process = require('../helpers/helper');

class ContactGroup {
  constructor(contact_name, group_name) {
    this.contact_name = contact_name
    this.group_name = group_name
  }
}

class ModelGroupContact {
  constructor() {

  }

  static addNewContact(content, cb){

    const newMember = new ContactGroup(content[0], content[1])

    Process.searchContact(newMember.contact_name, (err, id_contact) => {

      if (err) {
        cb(err)
      } else {

        Process.searchGroup(`${newMember.group_name}`, (err, id_group) => {

          if (err) {
            cb(err)
          } else {

            db.run(`INSERT INTO contact_group(id_contact, id_group)
                    VALUES(${id_contact}, ${id_group})`, (err, success) => {

              if (err) {
                cb(err)
              } else {
                cb(`success add "${newMember.contact_name}" to group "${newMember.group_name}"`)
              }

            })

          }

        })

      }

    })

  }

}


module.exports = ModelGroupContact;
