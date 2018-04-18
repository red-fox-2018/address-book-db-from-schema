const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db')

// function printName() {
//   db.all(`SELECT * FROM contacts`,(err,data) =>{
//     console.log(data);
//   })
// }
// printName()
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
  static showGIC(callback){
    db.all(`SELECT template.name AS contactName, template.groupsId AS groupId, groups.name AS groupName FROM (SELECT contacts.id,contacts.name,groups_contacts.groupsId FROM groups_contacts JOIN contacts ON contacts.id = groups_contacts.contactsId ) AS template JOIN groups ON groups.id = template.groupsId`, (err,template)=>{
      let query = `SELECT * FROM contacts`
      db.all(query,(err,listContact) =>{
        // console.log(listContact);
        for (var i = 0; i < listContact.length; i++) {
          let result = `${listContact[i].name} : `
          let arrGroup = []
          for (var j = 0; j < template.length; j++) {
            if (listContact[i].name == template[j].contactName) {
              arrGroup.push(template[j].groupName)
            }
          }
          result += arrGroup
          callback(null,result)
        }
      })
    })
  }
}

module.exports = Contact
