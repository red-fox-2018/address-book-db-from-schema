"use strict"
const Model = require('../models/group');
const View = require('../views/view');

class Controller {
  static dataGroup() {
    Model.getData((err, statusMessage) => {
      if (err) {
        View.showErrorMessage(err);
      } else {
        View.showMessage(statusMessage);
      }
    });
  }

  static saveGroup(name) {
    Model.save(name, (err, data) => {
      if (err) {
        View.showErrorMessage(err);
      } else {
        View.showMessage(data);
      }
    });
  }

  static updateGroup(id, value) {
    Model.update(id, value, (err, statusMessage) => {
      if (err) {
        View.showErrorMessage(err);
      } else {
        View.showMessage(statusMessage);
      }
    });
  }

  static deleteGroup(id) {
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