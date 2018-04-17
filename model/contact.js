const sqlite3 = require('sqlite3').verbose()

class Contact{

    static openDB() {

        return new sqlite3.Database('./addressBook.db')
    }

    static show(cb) {
        let db = Contact.openDB()
        let query = `SELECT  Groups.name AS groupName, Contacts.name, Contacts.company, Contacts.phone, Contacts.email
        FROM Contacts JOIN ContactGroup
        ON Contacts.id = ContactGroup.idContact
        JOIN Groups
        ON ContactGroup.idGroup = Groups.id
        ORDER BY Contacts.name ASC`

        db.all(query,function(err,rows){
            if(err){
                cb(err,null)
            }else {
                cb(null,rows)
            }
        })

        db.close()
    }

    static create(name,company,phone,email,cb) {
        let db = Contact.openDB()
        let query = `INSERT INTO Contacts
                     VALUES (
                        null,
                        "${name}",
                        "${company}",
                        "${phone}",
                        "${email}"
                    )`
        db.run(query,function(err){
            if(err){
                cb(err,null)
            } else {
                let msg = `Insert ${name} success`
                cb(null,msg)
            }
        })

        db.close()
    }

    static update(id,name,company,phone,email,cb) {

        let db = Contact.openDB()
        let query = `UPDATE Contacts
                     SET
                     name = "${name}",
                     address = "${company}",
                     phone = "${phone}",
                     email = "${email}"
                     WHERE
                     ID = ${id}`

        db.run(query,function(err){
            if(err){
                cb(err,null)
            }else{
                let msg = `Update ${name} success`
                cb(null,msg)
            }
        })

        db.close()
    }

    static delete(id,cb){

        let db = Contact.openDB()
        let query = `DELETE FROM Contacts
                     WHERE id = ${id}
                    `
        db.run(query,function(err){
            if(err){
                cb(err,null)
            }else {
                let msg = `Delete ID contact success`
                cb(null,msg)
            }
        })

        db.close()
    }
}

module.exports = Contact