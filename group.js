const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('AddressBook.db')

class Group{
    
    static createDB(groupName, callback){
        let query = `INSERT INTO groups VALUES(null, "${groupName}")`
        db.run(query,function(){
            callback(true)
        })
    }

    static deleteDB(id, callback){
        let query = `DELETE FROM groups WHERE id = ${id}`
        db.run(query,function(){
            callback(true)
        })
    }

    static addToGroup(contactID, groupID, callback){
        let queryContact = `SELECT name FROM contacts WHERE id = ${contactID}`
        let queryGroup = `SELECT name FROM groups WHERE id = ${groupID}`
        db.all(queryContact,[],function(err, contactName){
            db.all(queryGroup,[],function(err, groupName){
                let Cname = contactName[0].name
                let Gname = groupName[0].name
                let query = `INSERT INTO contact_group VALUES(null, "${Cname}", "${Gname}")`
                db.all(query,[],function(err,data){
                    console.log('masuk')
                    callback(Cname, Gname, true)
                })
            })
        })
    }

    static showMemberGroup(groupName, callback){
        let query = `SELECT * FROM contacts JOIN contact_group on contacts.name = contact_group.contactsName
                     JOIN groups ON contact_group.groupName = groups.name WHERE groups.name = "${groupName}"`
        db.all(query,[],function(err,dataMember){
            console.log('masuk')
            callback(dataMember)
        })
    }
}

module.exports = Group