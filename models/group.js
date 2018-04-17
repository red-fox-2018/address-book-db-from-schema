const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/address_book.db')


class Group {

    static create(name, cb){
        let query = `INSERT INTO Groups (group_name) VALUES ("${name}")`

        db.run(query, err =>{
            if(!err){
                cb('save group sukses')
            } else {
                cb(err)
            }
        })
    }

    static update(id, param, newValue, cb){
        let query = `UPDATE Groups 
                        SET ${param} = "${newValue}" 
                        WHERE id = ${id}`

        db.run(query, err =>{
            
            if(!err){
                cb('update group sukses')
            } else {
                cb(err)
            }
        })
    }

    static delete(name, cb){
        let query = `DELETE FROM Groups WHERE group_name = "${name}"`

        db.run(query, err =>{
            
            if(!err){
                cb('delete group sukses')
            } else {
                cb(err)
            }
        })
    }

}

module.exports = Group