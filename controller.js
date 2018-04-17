const Contact = require('./model/contact');
const Group = require('./model/group');
const View = require('./view')

class Controller {
  static showContact() {
    Contact.show((result) => {
      View.display(result);
    })
  }
  static addContact(name, perusahaan, no_telp, email) {
    Contact.add(name, perusahaan, no_telp, email, (result) => {
      View.display(result);
    });
  }
  static deleteContact(contactId) {
    Contact.delete(contactId, (result) => {
      View.display(result);
    });
  }
  static updateContact(contactId, column, newData) {
    Contact.update(contactId, column, newData, (result) => {
      View.display(result);
    });
  }
  static showGroup() {
    Group.show((result) => {
      View.display(result)
    })
  }
  static addGroup(name) {
    Group.add(name, (result) => {
      View.display(result);
    });
  }
  static deleteGroup(groupId) {
    Group.delete(groupId, (result) => {
      View.display(result);
    });
  }
  static updateGroup(groupId, column, newData) {
    Group.update(groupId, column, newData, (result) => {
      View.display(result);
    });
  }
  static assignMember(groupId, contactId) {
    Group.assign(groupId, contactId, (result) => {
      View.display(result);
    })
  }
}

module.exports = Controller;