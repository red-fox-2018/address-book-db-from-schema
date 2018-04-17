const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/address_book.db')


class Contact {

    static create(name, company, phone, email, cb){
        
        let query = `INSERT INTO Contacts (name, company, phone, email) 
                        VALUES ("${name}",
                                "${company}",
                                "${phone}",
                                "${email}")`

        db.run(query, err =>{
            if(!err){
                cb('save contact sukses')
            } else {
                cb(err)
            }
        })
    }

    static update(id, param, newValue, cb){
        let query = `UPDATE Contacts 
                        SET ${param} = "${newValue}" 
                        WHERE id = ${id}`

        db.run(query, err =>{
            
            if(!err){
                cb('update contact sukses')
            } else {
                cb(err)
            }
        })
    }

    static delete(name, cb){
        let query = `DELETE FROM Contacts WHERE name = "${name}"`

        db.run(query, err =>{
            
            if(!err){
                cb('delete contact sukses')
            } else {
                cb(err)
            }
        })
    }

    static show(cb){
        let query = `SELECT contacts.id, contacts.name, contacts.company, contacts.phone, contacts.email, groups.group_name
                        FROM contacts 
                        JOIN contactgroups ON contacts.id = contactgroups.contactId
                        JOIN groups ON contactgroups.groupId = groups.id`

        db.all(query, (err, rows)=>{
            if(!err){
                cb(null, rows)
            } else {
                cb(err, null)
            }
        })
    }

}

module.exports = Contact


