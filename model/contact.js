const Controller = require('../controller/controller')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('address_book.db')

class Contact{
    constructor(name,company,phoneNumber,email){
        this.name = name
        this.company = company
        this.phoneNumber = phoneNumber
        this.email = email
    }

    static listContact(callback){
        let queryListContact = `SELECT * FROM contact`
        db.all(queryListContact,function(err,rows){
            callback(err,rows)
        })
    }

    addContact(callback){
        let queryAddContact = `INSERT INTO contact VALUES(null,'${this.name}','${this.company}','${this.phoneNumber}','${this.email}')`
        db.run(queryAddContact,function(err){
            callback(err,"Data has been Added")
        })
    }

    static updateContact(id,kolom,value,callback){
        let queryUpdateContact = `UPDATE contact SET ${kolom} = '${value}' WHERE id = '${id}'`
        db.run(queryUpdateContact,function(err){
            callback(err,"Data has been Updated")
        })
    }

    static deleteContact(id,callback){
        let queryDeleteContact = `DELETE FROM contact WHERE id = '${id}'`
        db.run(queryDeleteContact,function(err){
            callback(err,"Data has been Deleted")
        })
    }
}

module.exports = Contact