const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('AddressBook.db')

class Contact{
    static addDB(company, phone, email, name, callback){
        let query = `INSERT INTO contacts VALUES(
            null,"${name}", "${company}", ${phone}, "${email}"
        )`
        db.run(query,function(err,data){
            if(err){
                throw err
            }
            else{
                let addedData = [name, company, phone, email]
                callback(addedData, true)
            }
        })
    }

    static showDB(callback){
        let query = `SELECT contacts.id, contacts.name, contacts.company, contacts.phone, contacts.email, groups.name_group 
                    FROM contacts LEFT JOIN contact_group ON contacts.id = contact_group.contactId
                    LEFT JOIN groups ON contact_group.groupId = groups.id_group`
        db.all(query,[],function(err,contactGroupData){
            callback(contactGroupData)
        })
    }

    static deleteDB(id, callback){
        let query = `DELETE FROM contacts WHERE id = ${id}`
        db.run(query,function(){
            let queryConjungtion = `DELETE FROM contact_group WHERE contactId = ${id}`
            db.run(queryConjungtion,function(){
                callback(true)
            })
        })
    }

    static updateDB(command3, id, update, callback){
        db.run(`UPDATE contacts SET ${command3} = "${update}" WHERE id = ${id}`,function(){
            callback(true)
        })
    }
}

module.exports = Contact