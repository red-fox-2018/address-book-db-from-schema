const ModelContact = require('../models/contact.js');
const ModelGrup = require('../models/group.js');
const ModelContactGroup = require('../models/contact-group.js');
const View = require('../views/view.js');


class Controller {
  constructor() {
    this.route = this.route()
  }

  static addContact(content,callback){
    //console.log(content);
    ModelContact.insertContact(content,message=>{
        View.show(message)
    })
  }

  static addGroup(content,callback){
    //console.log(content);
    ModelGrup.insertGroup(content,message=>{
        View.show(message)
    })
  }

  static addtoGroup(content, callback){
    ModelContactGroup.addtoGroup(content,message=>{
        View.show(message)
    })
  }

  static nameDetail(content, callback){
    ModelGrup.nameDetail(content,message=>{
        View.show(message)
    })
  }

  static groupDetail(content, callback){
    ModelGrup.groupDetail(content,message=>{
        View.show(message)
    })
  }

  static deleteGroup(content, callback){
    ModelGrup.deleteGroup(content,message=>{
        View.show(message)
    })
  }

}


module.exports = Controller;
