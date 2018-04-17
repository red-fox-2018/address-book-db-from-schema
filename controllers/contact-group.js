const Model = require('../models/contact-group');
const View = require('../views/contact-group');

class CGroupController {

  static listContactGroup(){
    Model.findAll(function(err, data){
      if(err){
        View.showErr(err)
      }else{
        View.showData(data)
      }
    })
  }

  static addContactGroup(newContact){
    Model.create(newContact, function(err, contact, group) {
      if(err){
        View.showErr(err)
      }else{
        View.succesAdd(contact, group)
      }
    })
  }

  static deleteContactGroup(dataCGroup){
    Model.destroy(dataCGroup, function(err, contact, group) {

      if(err = "not found"){
        View.showErrDelete(err, contact, group)
      }else if(err){
        View.showErr(err)
      }else{
        View.succesDelete()
      }
    })
  }

}

module.exports = CGroupController;
