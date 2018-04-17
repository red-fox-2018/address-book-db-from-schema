const contact = require('./model');
const tableName = 'Contacts'

class ContactModel {

  static findAll(cb){
    contact.findAll(tableName, function(err, data){
      cb(err, data)
    })
  }

  static create(dataInput, cb){
    let newContact = new Contact(dataInput)

    contact.create(tableName, newContact, function(err){
      cb(err, newContact)
    })
  }

  static update(updData, cb){
    let objWhere = ContactModel.arrToObj([updData[0]])
    let objUpdate = ContactModel.arrToObj(updData.slice(1))

    contact.update(tableName, objUpdate, objWhere, function(err){
      cb(err)
    })
  }

  static destroy(idContact, cb){
    let objWhere = ContactModel.arrToObj([idContact])

    contact.destroy(tableName, objWhere, function(err){
      cb(err)
    })
  }

  static arrToObj(arrData){
    let obj = {}
    arrData.forEach(function(data, i){
      let valCol = data.split(",")
      let col = valCol[0]
      let val = valCol[1]

      if(col == 'id'){
        val = Number(valCol[1])
      }

      obj[col] = val
    })
    return obj
  }



}

class Contact {
  constructor(arrContact) {
    this.name = arrContact[0],
    this.company = arrContact[1],
    this.phone = arrContact[2],
    this.email = arrContact[3]
  }
}
module.exports = ContactModel;
