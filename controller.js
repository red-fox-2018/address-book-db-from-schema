const View = require('./view');
const Contact = require('./models/contact.js');
const Group = require('./models/group.js');



class Controller {
  constructor() {

  }

  static addContact(command, inputData) {
    if (inputData.length === 0) {
      View.guide(command);
    } else {
      Contact.add(inputData, (fullName, err) => {
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

  static assignGroup(command, inputData) {
    if (inputData.length === 0) {
      View.guide(command)
    } else {
      Contact.assignContact(inputData, (err, contactId) => {
        if (err) {
          View.showErr(err)
        } else {
          Group.assignGroup(contactId, inputData[2], (err) => {
            if (err) {
              View.showErr(err)
            } else {
              View.assignSuccess(inputData)
            }
          })
        }
      })
    }
  }

  static addGroup(command, newGroupName) {
    if (newGroupName.length === 0) {
      View.guide(command)
    } else {
      Group.addGroup(newGroupName[0], (err) => {
        if (err) {
          View.showErr(err)
        } else {
          View.successAddGroup(newGroupName[0])
        }
      })
    }
  }

  static deleteGroup(command, groupName) {
    if (groupName.length === 0) {
      View.guide(command)
    } else {
      Group.deleteGroup(groupName[0], (err) => {
        if (err) {
          View.showErr(err)
        } else {
          View.successDelGroup(groupName[0])
        }
      })
    }
  }
}



module.exports = Controller;
