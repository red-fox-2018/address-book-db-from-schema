const ControllerContact = require('./cContact.js')
const ControllerGroup = require('./cGroup.js')
const ControllerContactGroup = require('./cContactGroup.js')
var command = process.argv.slice(2)

switch(command[0]) {
  case 'showContact':
  ControllerContact.show()
  break;
  case 'addContact':
  ControllerContact.add({name: command[1], company: command[2], phone_number: command[3], email: command[4]});
  break;
  case 'showGroup':
  ControllerGroup.show();
  break;
  case 'addGroup':
  ControllerGroup.add({name: command[1]});
  break;
  case 'showContactGroup':
  ControllerContactGroup.show();
  break;
  case 'addContactGroup':
  ControllerContactGroup.add({contactId: command[1], groupId: command[2]});
  break;
}
