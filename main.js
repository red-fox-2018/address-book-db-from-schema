var command = process.argv.slice(2);
const Controller = require('./controller');


switch (command[0]) {
  case 'add:contact':
    Controller.addContact(command[0], command.slice(1))
    break;
  case 'update:contact':
    Controller.updateContact(command[0], command.slice(1))
    break;
  case 'delete:contact':
    Controller.deleteContact(command[0], command.slice(1))
    break;
  case 'show:contact':
    Controller.showContact(command[0], command.slice(1))
    break;
  case 'assign:group':
    Controller.assignGroup(command[0], command.slice(1))
    break;
  default:

}
