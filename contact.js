const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db')

class Contact {
  static add (name,company,telephoneNumber,email,callback){
    db.serialize(()=> {
      db.run(`INSERT INTO contacts VALUES (null,"${name}","${company}",${telephoneNumber},"${email}")`)
      db.all(`SELECT * FROM contacts ORDER BY id DESC LIMIT 1`, (err,data) =>{
        callback(err,'Contact successfully added',data[0],data[0].length)
      })
    })
    db.close()
  }
  static show (callback){
    db.all(`SELECT * FROM contacts`, (err,data)=>{
      callback(data)
    })
  }
  static update (columnName,columnValue,id,callback){
    db.serialize(()=>{
      db.run(`UPDATE contacts SET ${columnName} = "${columnValue}" WHERE id = ${id}`)
      db.get(`SELECT * FROM contacts WHERE id = ${id}`, (err,data) =>{
        callback(err,data,'Contact has been updated')
      })
    })
    db.close()
  }
  static deleteContact(id,callback){
    db.serialize(()=>{
      db.run(`DELETE FROM contacts WHERE id = ${id}`)
      db.run(`DELETE FROM groups_contacts WHERE contactsId = ${id}`)
      callback(`Contact with id : ${id} has been deleted`)
    })
    db.close()
  }
}

module.exports = Contact
