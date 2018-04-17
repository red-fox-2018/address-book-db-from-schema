/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./libs/address_book.db', (err) => {
   if (err) {
      return console.error(err.message);
   }
   console.log('Connected to the in-memory SQlite database.');
});


class ContactGroupModel {
  
   static add(contact_id, group_id, cb) {
      db.run(`INSERT INTO Contact_Groups (contact_groups_id, contact_id, group_id) VALUES (
             null, ?, ?)`, contact_id, group_id, (err) => {
         if (err) throw err;
         else {
            cb('Table Contact_Groups created successfully');
         }
      });
      db.close((err) => {
         if (err) {
            return console.error(err.message);
         }
         console.log('Close the database connection.');
      });
   }
   static update(contact_id, group_id, contact_groups_id, cb) {
      db.run(`UPDATE Contact_Groups SET contact_id = '${contact_id}',
                                group_id = '${group_id}'
                                WHERE contact_groups_id = ${contact_groups_id};`, (err) => {
         if (err) throw err;
         else {
            cb('Table Contact_Groups updated successfully');
         }
      });
      db.close((err) => {
         if (err) {
            return console.error(err.message);
         }
         console.log('Close the database connection.');
      });
   }
   static delete(contact_groups_id, cb) {
      db.run(`DELETE FROM Contact_Groups WHERE contact_groups_id = ${contact_groups_id};`, (err) => {
         if (err) throw err;
         else {
            cb('Table Contact_Groups deleted successfully');
         }
      });
      db.close((err) => {
         if (err) {
            return console.error(err.message);
         }
         console.log('Close the database connection.');
      });
   }
}

module.exports = ContactGroupModel;
