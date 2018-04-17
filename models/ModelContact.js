const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/adress_book.db') 

class Contact{
    constructor(objContact){ 
        this.name = objContact.name,
        this.company = objContact.company,
        this.telephonNumber = objContact.telephonNumber,
        this.email = objContact.email 
    }

    static save(contact, cb){
        // console.log(contact)
        let query = `insert into contacts (id, name, company, telephonNumber, email)
                     values(null, "${contact.name}", "${contact.company}", "${contact.telephonNumber}", "${contact.email}");`
        // console.log(query) 
        db.run(query, (err)=> {
            if(err) throw err;
            cb(true)
        })
    }


}

module.exports = {Contact}