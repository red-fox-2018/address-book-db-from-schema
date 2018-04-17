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

   // static phoneNumberValidasi(phone_number, cb) {
   //    let validNumber = '0123456789';
   //    if (phone_number.length > 17) {
   //       cb(`phone_number is not valid`);
   //    }
   //
   //    for (let i = 0; i < phone_number.length; i++) {
   //       let count = 0;
   //       for (let j = 0; j < validNumber.length; j++) {
   //          if (phone_number[i] == validNumber[j]) {
   //             count++;
   //          }
   //       }
   //       if (count == 0) {
   //          cb(`phone_number is not valid`);
   //       }
   //    }
   // }

   static add(name, company, phone_number, email, cb) {
      db.run(`INSERT INTO Contacts (contact_id, name, company, phone_number, email) VALUES (
           null, '${name}', '${company}', '${phone_number}', '${email}')`, (err) => {
         if (err) throw err;
         else {
            cb('Table Contacts added successfully');
         }
      });
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
      db.all(`SELECT Contacts.name AS ContactName, company, phone_number, email, gabung.name AS groupName FROM Contacts
            LEFT JOIN (SELECT groups.name, Contact_Groups.contact_id FROM groups
            JOIN Contact_Groups ON groups.group_id = Contact_Groups.group_id) AS gabung
            ON gabung.contact_id = Contacts.contact_id;`, (err, dataRows) => {
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
