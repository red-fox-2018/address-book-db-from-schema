const View = require('../views/view');
const ModelContact = require('../models/contact');
const ModelGroup = require('../models/group');
const ModelContactGroup = require('../models/contact-group');

class Controller {
  constructor() {

  }

  static addContact(content){

    ModelContact.add_contact(content, success => View.show(success))

  }

  static updateContact(content){

    ModelContact.update_contact(content[0], content[1], content[2], success => View.show(success))

  }

  static deleteContact(id){

    ModelContact.delete_contact(id, success => View.show(success))

  }

  static showContact(id){

    ModelContact.show_contact(id, data => View.show(data))

  }

  static addGroup(content){

    ModelGroup.add_group(content[0], success => View.show(success))

  }

  static updateGroup(content){

    ModelGroup.update_group(content[0], content[1], success => View.show(success))

  }

  static deleteGroup(id){

    ModelGroup.delete_group(id, success => View.show(success))

  }

  static showGroup(id){

    ModelGroup.show_group(id, data => View.show(data))

  }

  static addContactToGroup(content){

    ModelContactGroup.addNewContact(content, success => View.show(success))

  }

}

module.exports = Controller;
