const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/database.db');

class ModelContactGroup {
  constructor() {

  }

  static addtoGroup(data,callback){
    let sql =`select contact_id
              from contact
              where name = '${data[0]}'`

      db.get(sql,function(err,contact) {
        let sql =`select group_id
                  from groupcontact
                  where groupName = '${data[1]}'`
          db.get(sql,function(err,group) {
            let query = `insert into contact_group (id,group_id,contact_id)
            VALUES(null,?,?)`
            db.serialize(function(err) {
              //console.log(group,contact);
                db.run(query,`${group.group_id}`,`${contact.contact_id}`)
                //console.log(sql);
                if(err){
                  callback('data salah')
                }else{
                  callback(` sukses tambah ke grup`);
                }
            })
          })
      })
  }
}

module.exports = ModelContactGroup;
