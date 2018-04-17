class ViewHelp {
  static help(){
    console.log(`
      Add Contact to Group       ===>    node main.js addContactGroup colContact,valContact colGroup,valGroup
      Delete Contact From Group  ===>    node main.js deleteContactGroup colContact,valContact colGroup,valGroup

      Add Contact                ===>    node main.js addContact name,company,phone,email
      Display List of Contact    ===>    node main.js listContact
      Update Contact             ===>    node main.js updateContact id,noId column1,value1 column2,value2 ...
      Delete Contact             ===>    node main.js deleteContact id,noId

      Add Group                  ===>    node main.js addGroup name
      Display list of Group      ===>    node main.js listGroup
      Update Group               ===>    node main.js updateGroup id,noId column1,value1
      Delete Group               ===>    node main.js deleteGroup id,noId
      `);
  }
}

module.exports = ViewHelp;
