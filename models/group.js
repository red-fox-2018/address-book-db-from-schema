const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/address_book.db');
const Process = require('../helpers/helper');

class Group {
  constructor(name) {
    this.groupName = name
  }
}

class ModelGroup {
  constructor() {

  }

  static add_group(content, cb){

    const new_group = new Group(content)

    db.run(`INSERT INTO groups(name)
            VALUES("${new_group.groupName}")`, (err, success) => {

      if (err) {
        cb(err, null)
      } else {
        cb(`success add "${new_group.groupName}" to groups`)
      }

    })

  }

  static update_group(id, content, cb){

    db.run(`UPDATE groups
            SET name = "${content}"
            WHERE id = ${id}`, (err, success) => {

      if (err) {
        cb(err)
      } else {
        cb(`success update ${id}'s name to ${content}`)
      }

    })

  }

  static delete_group(id, cb){

    db.run(`DELETE FROM groups
            WHERE id = ${id}`, (err, success) => {

      if (err) {
        cb(err)
      } else {

        Process.deleteGroup(+(id), (err, success) => {
          if (err) {
            cb(err)
          } else {
            cb(success)
          }
        })

      }

    })

  }

  static show_group(id, cb){

    db.get(`SELECT * FROM groups
            WHERE id = ${id}`, (err, data) => {

      if (err) {
        cb(err)
      } else {
        cb(data)
      }

    })

  }

}

module.exports = ModelGroup;
