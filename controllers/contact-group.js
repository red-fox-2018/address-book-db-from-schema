"use strict"
const Model = require('../models/contact-group');
const View = require('../views/view');

class Controller {
  static assignContact(groupName, contactName) {
    Model.addContact(groupName, contactName, (err, statusMessage) => {
      if (err) {
        View.showErrorMessage(err);
      } else {
        View.showMessage(statusMessage);
      }
    });
  }

  static deleteGroupId(id) {
    Model.deleteGroup(id);
  }
}

module.exports = Controller;