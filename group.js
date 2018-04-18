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
        let query = `DELETE FROM groups WHERE id_group = ${id}`
        db.run(query,function(){
            let queryConjungtion = `DELETE FROM contact_group WHERE groupId = ${id}`
            db.run(queryConjungtion,function(){
                callback(true)
            })
        })
    }

    static addToGroup(contactID, groupID, callback){
        let query = `INSERT INTO contact_group VALUES(null, "${contactID}", "${groupID}")`
        db.all(query,[],function(err, contactGroup){
            let queryContact = `SELECT name FROM contacts WHERE id = ${contactID}`
            let queryGroup = `SELECT name_group FROM groups WHERE id_group = ${groupID}`
            db.get(queryGroup,[],function(err, Gname){
                db.get(queryContact,[],function(err,Cname){
                    callback(Cname, Gname, true)
                })
            })
        })
    }

    static showMemberGroup(groupName, callback){
        let query = `SELECT * FROM contacts JOIN contact_group on contacts.id = contact_group.contactId
                     JOIN groups ON contact_group.groupId = groups.id_group WHERE groups.name_group = "${groupName}"`
        db.all(query,[],function(err,dataMember){
            callback(dataMember)
        })
    }
}

module.exports = Group