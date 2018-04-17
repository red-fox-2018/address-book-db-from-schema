const group = require('./model');
const tableName = 'Groups'

class GroupModel {

  static findAll(cb){
    group.findAll(tableName, function(err, data){
      cb(err, data)
    })
  }

  static create(dataInput, cb){
    let newGroup = new Group(dataInput)

    group.create(tableName, newGroup, function(err){
      cb(err, newGroup)
    })
  }

  static update(updData, cb){
    let objWhere = GroupModel.arrToObj([updData[0]])
    let objUpdate = GroupModel.arrToObj(updData.slice(1))

    group.update(tableName, objUpdate, objWhere, function(err){
      cb(err)
    })
  }

  static destroy(idGroup, cb){
    let objWhere = GroupModel.arrToObj([idGroup])
    let id = objWhere.id

    group.destroy(tableName, objWhere, function(err){
      if(err){
        cb(err)
      }else{
        group.destroy('Contact_Groups', {groupId : id}, function(err){
          cb(err)
        })
      }
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

class Group {
  constructor(arrContact) {
    this.group_name = arrContact[0]
  }
}
module.exports = GroupModel;
