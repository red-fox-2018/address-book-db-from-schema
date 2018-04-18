const Controller = require('./controller.js');
const command = process.argv.slice(2)

switch (command[0]) {
  case 'addContact'://name,company,telephoneNumber,email
    Controller.addContact(command[1],command[2],command[3],command[4])
    break;
  case 'showContact':
    Controller.showContact()
    break;
  case 'updateContact':
    Controller.updateContact(command[1],command[2],command[3])//columnName,columnValue,id
    break;
  case 'deleteContact':
    Controller.deleteContact(command[1])//id
    break;
  case 'addGroup':
    Controller.addGroup(command[1])//name
    break;
  case'showGroup':
    Controller.showGroup()
    break;
  case 'updateGroup':
    Controller.updateGroup(command[1],command[2])//columnValue,id
    break;
  case 'deleteGroup':
    Controller.deleteGroup(command[1])//id
    break;
  case 'addContactToGroup':
    Controller.addCToG(command[1],command[2])//contactName,groupName
    break;
  case 'showGroupInContact':
    Controller.showGroupInContact()
    break;
  case 'showContactInGroup':
    Controller
    break;
  default:

}
