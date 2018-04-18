/*jshint esversion:6*/

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');

class Group{
  constructor(name,id,updateName){
    this.name = name;
    this.id = Number(id);
    this.updateName = updateName;
  }

  addGroup(callback){
    db.run(`INSERT INTO Groups (namaGroup) VALUES ('${this.name}')`,
    (err)=>{
      callback(err);
    });
  }

  updateGroup(callback){
    db.run(`UPDATE Groups SET namaGroup = '${this.updateName}' WHERE id = ${this.id}`,
    (err)=>{
      callback(err);
    });
  }

  deleteGroup(callback){
    db.run(`DELETE FROM Groups WHERE id = ${this.id}`,
    (err)=>{
      if(err){
        callback(err);
      }
    });
  }

  showGroups(callback){
    db.all(`SELECT * from Groups`,
    (err,data)=>{
      if(!err){
        callback(null,data);
      }else{
        callback(err,null);
      }
    });
  }


}




module.exports = Group;
