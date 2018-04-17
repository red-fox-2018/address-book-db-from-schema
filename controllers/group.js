const Model = require('../models/group');
const View = require('../views/group');

class GroupController {

  static listGroup(){
    Model.findAll(function(err, data){
      if(err){
        View.showErr(err)
      }else{
        View.showData(data)
      }
    })
  }

  static addGroup(newContact){
    Model.create(newContact, function(err, data) {
      if(err){
        View.showErr(err)
      }else{
        View.succesAdd(data)
      }
    })
  }

  static updateGroup(updGroup){
    Model.update(updGroup, function(err) {
      if(err){
        View.showErr(err)
      }else{
        View.succesUpdate()
      }
    })
  }

  static deleteGroup(idGroup){
    Model.destroy(idGroup, function(err) {
      if(err){
        View.showErr(err)
      }else{
        View.succesDelete()
      }
    })
  }

}

module.exports = GroupController;
