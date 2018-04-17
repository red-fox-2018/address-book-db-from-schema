const contact_group = require('./model');
const tableName = 'Contact_Groups'

class CGroupModel {

  static findAll(cb){
    contact_group.findAll(tableName, function(err, data){
      cb(err, data)
    })
  }

  static create(dataInput, cb){
    let contactWhere = CGroupModel.arrToObj([dataInput[0]])
    let groupWhere = CGroupModel.arrToObj(dataInput.slice(1))
    let column = '*'


    contact_group.findWhere('Contacts', column, contactWhere, function(err, rowContact){
      contact_group.findWhere('Groups', column, groupWhere, function(err, rowGroup){
        let contactId = rowContact[0].id
        let groupId = rowGroup[0].id
        let newCGroup = new CGroup([contactId, groupId])

        contact_group.create(tableName, newCGroup, function(err){
          cb(err, rowContact[0], rowGroup[0])
        })

      })
    })
  }

  static destroy(dataInput, cb){
    let contactWhere = CGroupModel.arrToObj([dataInput[0]])
    let groupWhere = CGroupModel.arrToObj(dataInput.slice(1))
    let column = '*'


    contact_group.findWhere('Contacts', column, contactWhere, function(err, rowContact){
        if(rowContact.length == 0){
          cb("not found", contactWhere, groupWhere)
        } else {
          contact_group.findWhere('Groups', column, groupWhere, function(err, rowGroup){
            if(rowGroup.length == 0){
              cb("not found", contactWhere, groupWhere)
            } else {
              let contactId = rowContact[0].id
              let groupId = rowGroup[0].id
              let newCGroup = new CGroup([contactId, groupId])

              contact_group.destroy(tableName, newCGroup, function(err){
                cb(err, contactWhere, groupWhere)
              })
            }
          })
        }
    })
  }

  // static destroy(idContact, cb){
  //   let objWhere = CGroupModel.arrToObj([idContact])
  //
  //   contact_group.destroy(tableName, objWhere, function(err){
  //     cb(err)
  //   })
  // }

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

class CGroup {
  constructor(arrCGroup) {
    this.contactId = arrCGroup[0],
    this.groupId = arrCGroup[1]
  }
}
module.exports = CGroupModel;
