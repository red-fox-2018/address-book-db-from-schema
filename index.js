
const { ContactsController, GroupsController } = require('./controllers');

let command = process.argv[2];
let values = process.argv.slice(3);

console.log(ContactsController, GroupsController);

switch(command) {
  case 'contact:list' :    
    ContactsController.showList();
    break;
  default:
    console.log('Please enter correct command!');
    break;
}