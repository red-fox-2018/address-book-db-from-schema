const sqlite3 = require('sqlite3').verbose()

class ContactGroup{

    static openDB() {

        return new sqlite3.Database('./addressBook.db')
    }

    static create(idContact,idGroup,cb) {

        let db = ContactGroup.openDB()
        let query = `INSERT INTO ContactGroup
                     VALUES (
                        null,
                        ${idContact},
                        ${idGroup}
                    )`
        db.run(query,function(err){
            if(err){
                cb(err,null)
            } else {
                let msg = `Insert ${idContact} to group ${idGroup} success`
                cb(null,msg)
            }
        })

        db.close()
    }

    static update(id,idContact,idGroup,cb) {

        let db = ContactGroup.openDB()
        let query = `UPDATE ContactGroups
                     SET
                     idContact = ${idContact},
                     idGroup = ${idGroup}
                     WHERE
                     ID = ${id}`

        db.run(query,function(err){
            if(err){
                cb(err,null)
            }else{
                let msg = `Update ${idContact} success`
                cb(null,msg)
            }
        })

        db.close()
    }

    static delete(id,cb){

        let db = ContactGroup.openDB()
        let query = `DELETE FROM ContactGroups
                     WHERE id = ${id}
                    `
        db.run(query,function(err){
            if(err){
                cb(err,null)
            }else {
                let msg = `Delete Contact Group success`
                cb(null,msg)
            }
        })

        db.close()
    }
}

module.exports = ContactGroup