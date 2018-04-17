var sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./address_book.db');

class Group{
    constructor(name){
        this.nama=name
    }

    static newGroup(){
        let query=`INSERT INTO groups (id,name) VALUES(NULL,'${newContact.nama}')`
        console.log(query)
        db.run(query,function(err){
          if(err){
            return console.log(err,'errorz')
          }
          console.log(`data inserted ${this.lastID}`)
        })
    }
    
}

module.exports={Group}