let Contact = require('./contact')
let Group = require('./group')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('address_book.db')

class Model{
    static assign(contactId, groupsId,callback){
        let add = `INSERT INTO contactGroups VALUES(null,'${contactId}','${groupsId}')`
        db.run(add)
        callback(`kontak telah didaftarkan kedalam group`)
    }
    static showContact(callback){
        let contact = `SELECT contacts.*,groups.name AS groups FROM contacts
                        JOIN contactGroups
                        ON contacts.id = contactGroups.contactId
                        JOIN groups
                        ON groups.id = contactGroups.groupsId
                        ORDER BY contacts.id ASC`
        db.all(contact,function (err,rows) {
            if(err){
                console.log('error')
            }
            let list_name = {}
            rows.forEach(function (data) {
                if (list_name[data.name] == undefined) {
                    list_name[data.name] = [data.groups]
                }
                else {
                    list_name[data.name].push(data.groups)
                }

            })
            let num = 1
            for (let key in list_name) {
                callback(`${num}. ${key}: ${list_name[key]}`)
                num++
            }
        })
    }
    static showGroup(callback){
        let group = `SELECT groups.id,groups.name AS groups, contacts.name FROM groups
                    join contactGroups
                    ON contactGroups.groupsId = groups.id
                    join contacts
                    ON contacts.id = contactGroups.contactId`
        db.all(group, function (err, rows) {
            if (err) {
                console.log('error')
            }
            let list_name = {}
            rows.forEach(function (data) {
                if(list_name[data.groups]==undefined){
                    list_name[data.groups] = [data.name]
                }
                else{
                    list_name[data.groups].push(data.name)
                }
               
            })
            let num = 1
            for(let key in list_name){
                callback(`${num}. ${key}: ${list_name[key]}`)
                num++
            }
        })
    }
   
}
module.exports = {Contact,Group,Model}