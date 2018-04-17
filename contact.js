const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('AddressBook.db')

class Contact{
    static addDB(company, phone, email, name, callback){
        console.log('masuk')
        let query = `INSERT INTO contacts VALUES(
            null,"${name}", "${company}", ${phone}, "${email}"
        )`
        db.run(query,function(){
            let addedData = [name, company, phone, email]
            callback(addedData, true)
        })
    }

    static showDB(callback){
        let query = `SELECT * FROM contacts`
        db.all(query,[],function(err,contacts){
            callback(contacts)
        })
    }

    static deleteDB(id, callback){
        let query = `DELETE FROM contacts WHERE id = ${id}`
        db.run(query,function(){
            callback(true)
        })
    }

    static updateDB(command3, id, update, callback){
        db.run(`UPDATE contacts SET ${command3} = "${update}" WHERE id = ${id}`,function(){
            callback(true)
        })
    }
}

module.exports = Contact