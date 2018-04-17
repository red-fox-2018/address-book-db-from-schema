const fs = require('fs')
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/address_book.db');

class Contact{

  static saveContact(name, perusahaan, phone, email,callback){
    let angka = '0123456789'
    if(phone.length > 17){
      callback('maksimal phone 17 digit')
    }
    for(let i = 0; i < phone.length;i++){
        let checker = 0
        for(let j = 0; j < angka.length;j++){
          if(phone[i] === angka[j]){
            checker++
          }
        }
        if(checker === 0){
            callback('input phone salah')
        }
    }
      let query = `INSERT INTO contacts(name, perusahaan, phone, email)
                   VALUES("${name}","${perusahaan}","${phone}","${email}");`
      db.run(query,(err)=>{
                if(err){
                  callback('data gagal diinput')
                }else{
                  callback('data berhasil diinput')
                }
              }
      );
  }

  static saveUpdateContact(name, perusahaan, phone, email,id, callback){
      let query = `UPDATE contacts SET
                  name = "${name}",
                  perusahaan = "${perusahaan}",
                  phone = "${phone}",
                  email = "${email}"
                  WHERE id = "${id}"`
      db.run(query,(err)=>{
                if(err){
                  callback('data gagal diupdate')
                }else{
                  callback('data berhasil diupdate')
                }
              });
  }

  static deleteContactDB(id,callback){
      let query = `DELETE FROM contacts
                    WHERE
                    id = "${id}";`
      db.run(query,(err)=>{
              if(err){
                callback('data gagal dihapus')
              }else{
                callback('data berhasil dihapus')
              }
            });
  }
}

module.exports = Contact
