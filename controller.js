const View = require('./view');
const Contact = require('./models/contact.js');



class Controller {
  constructor() {

  }

  static addContact(command, inputData) {
    if (inputData.length === 0) {
      View.guide(command);
    } else {
      Contact.add(inputData, (err, fullName) => {
        if (err) {
          View.showErr(err)
        } else {
          View.successAdd(fullName)
        }
      })
    }
  }

  static updateContact(command, inputData) {
    if (inputData.length === 0) {
      View.guide(command)
    } else {
      Contact.update(inputData, (err, fullName) => {
        if (err) {
          View.showErr(err)
        } else {
          View.successUpdateContact(fullName);
        }
      })
    }
  }

  static deleteContact(command, inputData) {
    if (inputData.length === 0) {
      View.guide(command)
    } else {
      Contact.delete(inputData, (err, fullName) => {
        (err) ? View.showErr(err) : View.successDelCon(fullName);
      })
    }
  }

  static showContact(command, inputData) {
    if (inputData.length === 0) {
      View.guide(command)
    } else if (inputData[0] === 'all') {
      Contact.showAll((err, allContact) => {
        (err) ? View.showErr(err) : View.showContact(allContact)
      })
    }
  }
}



module.exports = Controller;
