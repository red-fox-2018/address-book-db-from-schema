const fs = require('fs')
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/address_book.db');

class Group{
  static saveAddGroup(name,callback){
      let query = `INSERT INTO groups(name)
                    VALUES ('${name}'
                    );`
      db.run(query,(err)=>{
          if(err){
            callback('group gagal diinput')
          }else{
            callback('group berhasil diinput')
          }
        });
  }
  static saveUpdateGroup(name,id,callback){
      let query = `UPDATE groups SET
                    name = '${name}'
                    WHERE id = '${id}'`
      db.run(query,(err)=>{
                if(err){
                  callback('group gagal diupdate')
                }else{
                  callback('group berhasil diupdate')
                }
              });
  }
  static deletGroupDB(id,callback){
      let query = `DELETE FROM groups
                    WHERE
                    id = "${id}";`
                    console.log(query)
      db.run(query,(err) => {
              if(err){
                callback('group gagal dihapus:',err)
              }else{
                db.run(`DELETE FROM contacts_group
                      WHERE
                      groupId = '${id}';`,(err)=>{
                        if(err){
                          callback('group berhasil dihapus tapi contact masih ke-asign')
                        }else{
                          callback('group berhasil dihapus')
                        }
                      });
              }
            });
  }
}
module.exports = Group
