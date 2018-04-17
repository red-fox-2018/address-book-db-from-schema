const sqlite3 = require('sqlite3').verbose()

class Group{

    static openDB() {

        return new sqlite3.Database('./addressBook.db')
    }

    static create(name,cb) {

        let db = Group.openDB()
        let query = `INSERT INTO Groups
                     VALUES (
                        null,
                        "${name}"
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

    static update(id,name,cb) {

        let db = Group.openDB()
        let query = `UPDATE Groups
                     SET
                     name = "${name}"
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

        let db = Group.openDB()
        let query = `DELETE FROM Groups
                     WHERE id = ${id}
                    `
        db.run(query,function(err){
            if(err){
                cb(err,null)
            }else {
                let msg = `Delete group success`
                cb(null,msg)
            }
        })

        db.close()
    }
}

module.exports = Group