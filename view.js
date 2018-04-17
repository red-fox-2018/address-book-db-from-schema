class View {
  constructor() {

  }

  static guide(command) {
    switch (command) {
      case 'add:contact':
        console.log('<first_name> <last_name> <phone> <email> <address>');
        break;
      case 'update:contact':
        console.log('<first_name> <last_name> <col_tobeChanged> <new_data>');
        break;
      case 'delete:contact':
        console.log('<first_name> <last_name>');
        break;
      case 'show:contact':
        console.log('<all> OR <first_name> <last_name>');
      default:

    }

  }

  static showErr(err) {
    console.log(err);
  }

  static successAdd(fullName) {
    console.log(`${fullName} successfully added`);
  }

  static successUpdateContact(fullName) {
    console.log(`${fullName} successfully updated`);
  }

  static successDelCon(fullName) {
    console.log(`${fullName} successfully deleted`);
  }

  static showContact(contacts) {
    console.log('=============================================');
    contacts.forEach((contact) => {
      console.log(`Name     : ${contact._firstName} ${contact._lastName}`);
      console.log(`Phone    : ${contact._phone}`);
      console.log(`Email    : ${contact._email}`);
      console.log(`Address  : ${contact._address}`);
      console.log(`Group    : ${contact._group}`);
      console.log('\n');
    })
    console.log('=============================================');
  }
}


module.exports = View
