"use strict"
const Model = require('../models/contact');
const View = require('../views/view');

class Controller {
  static dataContact() {
    Model.getData((err, statusMessage) => {
      if (err) {
        View.showErrorMessage(err);
      } else {
        View.showMessage(statusMessage);
      }
    });
  }

  static saveContact(name, email, phone, company) {
    Model.save(name, company, email, phone, (err, data) => {
      if (err) {
        View.showErrorMessage(err);
      } else {
        View.showMessage(data);
      }
    });
  }

  static updateContact(column, id, value) {
    Model.update(column, value, id, (err, statusMessage) => {
      if (err) {
        View.showErrorMessage(err);
      } else {
        View.showMessage(statusMessage);
      }
    });
  }

  static deleteContact(id) {
    Model.delete(id, (err, statusMessage) => {
      if (err) {
        View.showErrorMessage(err);
      } else {
        View.showMessage(statusMessage);
      }
    });
  }
}

module.exports = Controller;