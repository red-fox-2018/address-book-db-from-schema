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
}


module.exports = View
