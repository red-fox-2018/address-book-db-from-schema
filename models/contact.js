var sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./address_book.db');

class Contact{
    constructor(name,company,phone,email){
        this.nama=name,
        this.company=company,
        this.phone=phone,
        this.email=email
    }

    static readContact(){
        let query = `SELECT * FROM contacts `
        db.all(query,(err,rows)=>{
            if(err) return console.log(err)
            rows.forEach(function(row){
                console.log(row.name,row.company,row.phone,row.email)
            })
        })
    }
    
    //isinya new object
    static newContact(newContact){
        let query=`INSERT INTO contacts (id,name,company,phone,email) VALUES(NULL,'${newContact.nama}','${newContact.company}','${newContact.phone}','${newContact.email}')`
        console.log(query)
        db.run(query,function(err){
          if(err){
            return console.log(err,'errorz')
          }
          console.log(`data inserted ${this.lastID}`)
        })
    }

    //onHold msh belom 
    static updateContact(){
        let query=`UPDATE contacts SET ${column_name} = '${value}' WHERE name='${name}'`
        db.run(query,function(err){
        if(err){
            return console.error(err.message)
        }
        console.log(`updated :${this.changes}`)
        })
    }

    static deleteContact(name){
        let query=`DELETE from contacts where name='${name}'`
        db.run(query,function(err){
            if(err){
                return console.log(err.message)
            }
            console.log(`row deleted : ${this.changes}`)
        })
    }

    
}

module.exports={Contact}