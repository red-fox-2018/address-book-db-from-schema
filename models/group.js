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

class GroupModel {

   static add(name, cb) {
      db.run(`INSERT INTO Groups (group_id, name) VALUES (
           null, '${name}')`, (err) => {
         if (err) throw err;
         else {
            cb('Table Groups added successfully');
         }
      });
      db.close((err) => {
         if (err) {
            return console.error(err.message);
         }
         console.log('Close the database connection.');
      });
   }

   static update(name, group_id, cb) {
      db.run(`UPDATE Groups SET name = '${name}'
            WHERE group_id = ${group_id};`, (err) => {
         if (err) throw err;
         else {
            cb('Table Groups updated successfully');
         }
      });
      db.close((err) => {
         if (err) {
            return console.error(err.message);
         }
         console.log('Close the database connection.');
      });
   }

   static delete(group_id, cb) {
      db.run(`DELETE FROM Groups WHERE group_id = ${group_id};`, (err) => {
         if (err) throw err;
         else {
            cb('Table Groups deleted successfully');
         }
      });
      db.close((err) => {
         if (err) {
            return console.error(err.message);
         }
         console.log('Close the database connection.');
      });
   }

   static show(cb){
     db.all(`SELECT * FROM Groups;`, (err, data)=>{
       if(err) throw err;
       else{
         cb(data);
       }
     });
   }
}

module.exports = GroupModel;
