const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/address_book.db');
const Process = require('../helpers/helper');

class Contact {
  constructor(name, company, phone, email) {
    this.name = name
    this.company = company
    this.phone = phone
    this.email = email
  }
}

class ModelContact {
  constructor() {

  }

  static add_contact(content, cb){

    if (Process.checkPhoneNumber(content[2])) {

      if (Process.checkEmail(content[3])) {

        const contact = new Contact(content[0], content[1], content[2], content[3])

        db.run(`INSERT INTO contacts(name, company, phone, email)
        VALUES("${contact.name}", "${contact.company}", "${contact.phone}", "${contact.email}")`, (err, success) => {

          if (err) {
            cb(err, null)
          } else {
            cb(`success add "${contact.name}" to contact`)
          }

        })

      } else {

        cb(`email is not valid !`)

      }

    } else {

      cb(`phone number is not valid`)

    }

  }

  static update_contact(table_name, id, content, cb){

    db.run(`UPDATE contacts
            SET ${table_name} = "${content}"
            WHERE id = ${id}`, (err, success) => {

      if (err) {
        cb(err)
      } else {
        cb(`success update ${id}'s ${table_name} to ${content}`)
      }

    })

  }

  static delete_contact(id, cb){

    db.run(`DELETE FROM contacts
            WHERE id = ${id}`, (err, success) => {

      if (err) {
        cb(err)
      } else {
        cb(`success delete data ${id} from contacts`)
      }

    })

  }

  static show_contact(id, cb){

    db.all(`SELECT contacts.id, contacts.name, contacts.company, contacts.phone, contacts.email, groups.name AS Member_Group
            FROM contacts JOIN contact_group ON contacts.id = contact_group.id_contact
            JOIN groups ON contact_group.id_group = groups.id
            where contacts.id = ${id}`, (err, data) => {

      if (err) {
        cb(err)
      } else {
        cb(data)
      }

    })

  }

}

module.exports = ModelContact;
