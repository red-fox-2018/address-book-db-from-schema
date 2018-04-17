var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../db/address_book.db');

let tableContacts = `CREATE TABLE IF NOT EXISTS contacts(
                      id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                      name VARCHAR,
                      perusahaan VARCHAR,
                      phone VARCHAR,
                      email VARCHAR
                    );`

db.run(tableContacts,(err,rows)=>{
          if(err){
            console.log(err)
          }else{
            console.log('success')
          }
        }
      )

let tableGroup = `CREATE TABLE IF NOT EXISTS groups(
                  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                  name VARCHAR
                );`

db.run(tableGroup,(err,rows)=>{
          if(err){
            console.log(err)
          }else{
            console.log('success')
          }
        }
      )

let tableConj = `CREATE TABLE IF NOT EXISTS contacts_group (
                  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                  contactId INTEGER NOT NULL ,
                  groupId INTEGER NOT NULL,
                  FOREIGN KEY(contactId) REFERENCES contacts(id),
                  FOREIGN KEY(groupId) REFERENCES groups(id)
                );`

db.run(tableConj,(err,rows)=>{
          if(err){
            console.log(err)
          }else{
            console.log('success')
          }
        }
      )


db.close()
