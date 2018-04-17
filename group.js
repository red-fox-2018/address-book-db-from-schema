const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db')

class Group {
  static add (name, callback){
    db.serialize(()=> {
      db.run(`INSERT INTO groups VALUES (null,"${name}")`)
      db.get(`SELECT * FROM groups WHERE name = "${name}"`, (err,data) =>{
        callback(err,'Group successfully added',data,data.id)
      })
    })
    db.close()
  }
  static show (callback){
    db.all(`SELECT * FROM groups`, (err,data)=>{
      callback(err,data)
    })
  }
  static update (columnValue,id,callback){
    db.serialize(()=>{
      db.run(`UPDATE groups SET name = "${columnValue}" WHERE id = ${id}`)
      db.get(`SELECT * FROM groups WHERE id = ${id}`, (err,data) =>{
        callback(err,data,'Group has been updated')
      })
    })
    db.close()
  }
  static deleteGroup(id,callback){
    db.serialize(()=>{
      db.run(`DELETE FROM groups WHERE id = ${id}`)
      db.run(`DELETE FROM groups_contacts WHERE groupsId = ${id}`)
      callback(`Group with id : ${id} has been deleted`)
    })
    db.close()
  }
  static insertContact(contactName,groupName,callback){
    db.get(`SELECT id FROM contacts WHERE name = "${contactName}"`,(err,contactId)=>{
      db.get(`SELECT id FROM groups WHERE name = "${groupName}"`,(err,groupId)=>{
        db.serialize(()=>{
          db.run(`INSERT INTO groups_contacts VALUES(null,${contactId.id},${groupId.id})`)
          db.all(`SELECT * FROM groups_contacts ORDER BY id DESC LIMIT 1`, (err,data) =>{
            callback(err,'Contact successfully added to Group',data[0])
          })
        })
        db.close()
      })
    })
  }
}

module.exports = Group
