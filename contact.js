/*jshint esversion:6*/
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');

class Contact{
  constructor(name,perusahaan,phone,email,id,yangInginDirubah,value){
    this.name = name;
    this.perusahaan = perusahaan;
    this.phone = phone;
    this.email = email;
    this.id = Number(id);
    this.toChange = yangInginDirubah;
    this.updateData = value;
  }

  save(callback){
    db.run(`INSERT INTO Contacts(nama,perusahaan,phone,email) VALUES ('${this.name}','${this.perusahaan}','${this.phone}','${this.email}')`,
    (err)=>{
      if(err){
        callback(err);
      }
    });
  }

  updateContact(callback){
    db.run(`UPDATE Contacts SET ${this.toChange} = '${this.updateData}' WHERE id = ${this.id}`,
    (err)=>{
      if(err){
        callback(err);
      }
    });
  }

  deleteContact(callback){
    db.run(`DELETE FROM Contacts WHERE id = ${this.id}`,
    (err)=>{
      if(err){
        callback(err);
      }
    });
  }

  showContacts(callback){
    db.all(`SELECT * from Contacts`,
    (err,data)=>{
      if(!err){
        callback(null,data);
      }else{
        callback(err,null);
      }
    });
  }
}




module.exports = Contact;
