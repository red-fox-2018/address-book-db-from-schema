const main = require('./main');
const Contact = require('./contact');
const Group = require('./group');
const View = require('./view');
const ContactGroup = require('./contact-group')

class Controller {
  static getCommand(command) {
    if (command[0] == 'addContact') {
      Contact.save(command[1], command[2], command[3], command[4], function(err) {
        if (err) {
          View.error(err);
        } else {
          View.contactSaved()
        }
      });
    } else if (command[0] == 'updateContact') {
      Contact.update(command[1], command[2], command[3], function(err) {
        if (err) {
          View.error(err);
        } else {
          View.contactUpdated();
        }
      });
    } else if (command[0] == 'deleteContact') {
      Contact.delete(command[1], function(err) {
        if (err) {
          View.error(err);
        } else {
          View.contactDeleted()
        }
      })
    } else if (command[0] == 'showContact') {
      Contact.read(function(err, data) {
        if (err) {
          View.error(err);
        } else {
          View.contactShow(data);
        }
      })
    } else if (command[0] == 'addGroup') {
      Group.save(command[1], function (err) {
        if (err) {
          View.error(err);
        } else {
          View.groupSaved();
        }
      })
    } else if (command[0] == 'updateGroup') {
      Group.update(command[1], command[2], function(err) {
        if (err) {
          View.error(err);
        } else {
          View.groupUpdated();
        }
      })
    } else if (command[0] == 'deleteGroup') {
      Group.delete(command[1], function(err) {
        if (err) {
          View.error(err);
        } else {
          View.groupDeleted()
        }
      })
    } else if (command[0] == 'showGroup') {
      Group.read(function (err, data) {
        if (err) {
          View.error(err);
        } else {
          View.groupShow(data);
        }
      })
    } else if (command[0] == 'groupDetail') {
      var commandInput = command.slice(1);
      ContactGroup.addGroupContactId(commandInput, function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      })
    } else if (command[0] == 'nameDetail') {
      
    }
  }
}

module.exports = Controller;
