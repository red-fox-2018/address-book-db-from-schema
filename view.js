const Controller = require('./controller');

class View {
  static error(err) {
    console.log(err);
  }

  static contactSaved() {
    console.log('contact saved');
  }

  static contactUpdated() {
    console.log('contact updated');
  }

  static contactDeleted() {
    console.log('contact deleted');
  }

  static contactShow(data) {
    console.log(data);
  }

  static groupSaved() {
    console.log('group saved');
  }

  static groupUpdated() {
    console.log('group updated');
  }

  static groupDeleted() {
    console.log('group deleted');
  }

  static groupShow(data) {
    console.log(data);
  }
}

module.exports = View;
