const command = process.argv.slice(2)
const controllerContact = require('./controllers/controllerContact').controllerContact

// console.log(command)

switch (command[0]) {
    case 'addContact':
        let objAddContact = {
            name: command[1],
            company: command[2],
            telephonNumber: command[3],
            email: command[4]    
        }
        // console.log(objAddContact)
        controllerContact.addContact(objAddContact)
        break;

    default:
        break;
}
