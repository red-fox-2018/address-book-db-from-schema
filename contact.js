const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('address_book.db')

class Contact {
    constructor(name, perusahaan, telp, email) {
        this.name = name
        this.perusahaan = perusahaan
        this.telp = telp
        this.email = email
    }
    save(callback){
        let save = `INSERT INTO contacts VALUES(null,'${this.name}','${this.perusahaan}','${this.telp}','${this.email}')`
        db.run(save)
        callback(`kontak berhasil disimpan`)
    }
    update(property,value,id,callback){
        let update = `UPDATE contacts SET ${property} = '${value}' WHERE id = ${id}`
        db.run(update)
        callback('kontak berhasil diupdate')
    }
    delete(id,callback){
        db.run(`DELETE FROM contacts WHERE id = ${id}`)
        callback('kontak berhasil di delete')
    }
}

module.exports = Contact