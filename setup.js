var sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./address_book.db');

class CreateTable{
    static tableCreator(query){
        db.run(query,function(err){
            if(err){
                return console.log(err)
            }
            console.log("berhasil create table ")
        })
    }
}



module.exports = {CreateTable}