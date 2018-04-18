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

class ContactModel {

   static add(name, company, phone_number, email, cb) {
      if (phone_number.length > 13) {
         cb('phone_number is not valid');
      } else {
         let validNumber = '0123456789';
         for (let i = 0; i < phone_number.length; i++) {
            let count = 0;
            for (let j = 0; j < validNumber.length; j++) {
               if (phone_number[i] == validNumber[j]) {
                  count++;
               }
            }
            if (count == 0) {
               cb(`phone_number is not valid`);
            }
         }
         db.run(`INSERT INTO Contacts (contact_id, name, company, phone_number, email) VALUES (
             null, '${name}', '${company}', '${phone_number}', '${email}')`, (err) => {
            if (err) throw err;
            else {
               cb('Table Contacts added successfully');
            }
         });
      }

      db.close((err) => {
         if (err) {
            return console.error(err.message);
         }
         console.log('Close the database connection.');
      });
   }

   static update(name, company, phone_number, email, contact_id, cb) {
      db.run(`UPDATE Contacts SET name = '${name}',
                                  company = '${company}',
                                  phone_number = '${phone_number}',
                                  email = '${email}'
                                  WHERE contact_id = ${contact_id};`, (err) => {
         if (err) throw err;
         else {
            cb('Table Contacts updated successfully');
         }
      });
      db.close((err) => {
         if (err) {
            return console.error(err.message);
         }
         console.log('Close the database connection.');
      });
   }
   
   static delete(contact_id, cb) {
      db.run(`DELETE FROM Contacts WHERE contact_id = ${contact_id};`, (err) => {
         if (err) throw err;
         else {
            cb('Table Contacts deleted successfully');
         }
      });
      db.close((err) => {
         if (err) {
            return console.error(err.message);
         }
         console.log('Close the database connection.');
      });
   }

   static show(cb) {
      db.all(`SELECT Contacts.name AS contactName, company, phone_number, email, gabungGroup.name AS groupName FROM Contacts
            LEFT JOIN (SELECT Groups.name, Contact_Groups.contact_id FROM Groups
            JOIN Contact_Groups ON Groups.group_id = Contact_Groups.group_id) AS gabungGroup
            ON gabungGroup.contact_id = Contacts.contact_id
            ORDER BY gabungGroup.name ASC;`, (err, dataRows) => {
         if (err) throw err;
         else {
            cb(dataRows);
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

module.exports = ContactModel;
