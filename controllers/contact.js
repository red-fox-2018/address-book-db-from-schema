const Model = require('../models/contact');
const View = require('../views/contact');

class ContactController {

  static listContact(){
    Model.findAll(function(err, data){
      if(err){
        View.showErr(err)
      }else{
        View.showData(data)
      }
    })
  }

  static create(newContact){
    Model.create(newContact, function(err, data) {
      if(err){
        View.showErr(err)
      }else{
        View.succesAdd(data)
      }
    })
  }

  static updateContact(updContact){
    Model.update(updContact, function(err) {
      if(err){
        View.showErr(err)
      }else{
        View.succesUpdate()
      }
    })
  }

  static deleteContact(idContact){
    Model.destroy(idContact, function(err) {
      if(err){
        View.showErr(err)
      }else{
        View.succesDelete()
      }
    })
  }

}

module.exports = ContactController;
