const Controller = require('../controller/controller')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('address_book.db')

class Group{
    constructor(name){
        this.name = name
    }

    static listGroup(callback){
        let queryListGroup = `SELECT * FROM groups`
        db.all(queryListGroup,function(err,rows){
            callback(err,rows)
        })
    }

    addGroup(callback){
        let queryAddGroup = `INSERT INTO groups VALUES(null,'${this.name}')`
        db.run(queryAddGroup,function(err){
            callback(err,"Data has been Added")
        })
    }

    static updateGroup(id,kolom,value,callback){
        let queryUpdateGroup = `UPDATE groups SET ${kolom} = '${value}' WHERE id = ${id}`
        db.run(queryUpdateGroup,function(err){
            callback(err,"Data has been Updated")
        })
    }

    static deleteGroup(id,callback){
        let queryDeleteGroup = `DELETE FROM groups WHERE groups.id = '${id}'`
        let queryContactGroup = `DELETE FROM contactGroup WHERE contactGroup.groupsId = '${id}'`
        db.run(queryDeleteGroup)
        db.run(queryContactGroup)
        callback("Data has been Deleted")
    }

    static assignContact(contact,callback) {
        let query = `INSERT INTO contactGroup (contactId, groupsId) VALUES (${contact.id}, ${this.id})`
        db.run(query,function(err){
            callback(err,"Data member sudah ditambahkan")
        })
    }
}

module.exports = Group