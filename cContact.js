var Contact = require('./contact.js')
var View = require('./view.js')

class ControllerContact {

  static show() {
    Contact.show((contactList) => {
      View.showContact(contactList)
    })
  }

  static add(objContact) {
    Contact.add(objContact, (newContact) => {
      View.addContact(newContact)
    })
  }

  static update(objContact) {
    Contact.update(objContact, (updateContact) => {
      View.updateContact(updateContact)
    })
  }

  static delete(objContact) {
    Contact.delete(objContact, (deleteContact) => {
      View.deleteContact(deleteContact)
    })
  }


}

module.exports = ControllerContact
