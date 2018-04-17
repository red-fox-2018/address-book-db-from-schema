const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./database/address_book.db');

class Model {

  static create(tableName, objData, cb){
    let inputData = this.convertData(objData)
    let valueQuery = "NULL"

    inputData.values.forEach(col=>{
      valueQuery += ', ?'
    })

    let query = `INSERT INTO ${tableName} (id, ${inputData.column.join(", ")}) VALUES (${valueQuery})`
    db.run(query, inputData.values, (err) =>{
      cb(err)
    });
  }

  static findAll(tableName, cb){
    let query = `SELECT * FROM ${tableName}`;
    db.all(query, function(err, row){
      if(err){
        cb(err, null)
      }else{
        cb(null, row)
      }
    })
  }

  static update(tableName, objUpdate, objWhere, cb){
    let setValue = this.loopData(objUpdate, ',')
    let setWhere = this.loopData(objWhere, 'AND')
    let query = `UPDATE ${tableName} SET${setValue} WHERE ${setWhere}`

    db.run(query, function(err){
      cb(err)
    })
  }

  static findWhere(tableName, column, objWhere, cb){
    let setWhere = this.loopData(objWhere, 'AND')
    let query = `SELECT ${column} FROM ${tableName} where ${setWhere}`

    db.all(query, function(err, row){
      if(err){
        cb(err, null)
      }else{
        cb(null, row)
      }
    })
  }

  static destroy(tableName, objWhere, cb){
    let setWhere = this.loopData(objWhere, 'AND')
    let query = `DELETE FROM ${tableName} WHERE ${setWhere}`

    db.run(query, function(err){
      cb(err)
    })
  }

  static convertData(objInput){
    let column = Object.keys(objInput)
    let values = Object.values(objInput)
    return {column: column, values: values}
  }

  static loopData(objInput, type){
    let query=''
    let firstValue = true
    let numValue


    for(let prop in objInput){
      numValue = Number.isInteger(objInput[prop])

      if(firstValue){
        if(numValue){
          query += ` ${prop} = ${objInput[prop]}`
        }else{
          query += ` ${prop} = '${objInput[prop]}'`
        }
        firstValue = false
      } else {
        if(numValue){
          query += ` ${type} ${prop} = ${objInput[prop]}`
        }else{
          query += ` ${type} ${prop} = '${objInput[prop]}'`
        }
      }
    }
    return query

  }

}

module.exports = Model;
