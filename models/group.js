const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('address_book.db')

class Group {
    constructor(name) {
        this.name = name
    }
    save(callback) {
       db.run (`INSERT INTO groups VALUES(null,'${this.name}')`)
       callback('group berhasil ditambahkan')
    }
    update(value, id,callback) {
        db.run(`UPDATE groups SET name = '${value}' WHERE id = ${id}`)
        callback('group berhasil di update')
    }
    delete(id,callback) {
        let delete_assign = `SELECT contactGroups.id FROM groups
                            join contactGroups
                            ON groups.id=contactGroups.groupsId
                            WHERE contactGroups.groupsId = 5`
                            
        db.each(delete_assign,function (err,rows) {
            if(err){
                callback('error')
            }
            db.run(`DELETE FROM contactGroups WHERE id = ${rows.id}`)
        })
        db.run(`DELETE FROM groups  WHERE id = ${id}`)

        callback('group berhasil di delete')
    }
}

module.exports = Group