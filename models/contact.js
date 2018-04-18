const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/database.db');

class ModelContact {
  constructor() {

  }

  static insertContact(data,callback){
    //console.log(data
    let sql = `INSERT INTO contact
              (contact_id,name,company,phoneNumber,email)
              VALUES(null,?,?,?,?)`
    db.serialize(function(err) {
        db.run(sql,`${data[0]}`,`${data[1]}`,`${data[2]}`,`${data[3]}`)
        //console.log(sql);
        if(err){
          throw err;
        }else{
          callback(`${data[0]} sukses di input`);
        }
    })
  }

  static updateContact(content, cb){
       let query = `UPDATE Contacts
                       SET ${content[1]} = "${content[2]}"
                       WHERE id = ${content[0]}`

       db.run(query, err =>{

           if(!err){
               cb('update contact sukses')
           } else {
               cb(err)
           }
       })
   }


  static nameDetail(content,callback){
    let sql=`select name, groupName
              from contact_group
              inner join contact on contact_group.contact_id =contact.contact_id
              inner join groupcontact on contact_group.group_id = groupcontact.group_id
              where name = '${content[0]}'`
      db.get(sql,function(err,resultData) {
        if(err){
          callback(err)
        }else{
          callback(resultData)
        }
      })
  }



}

module.exports = ModelContact;
