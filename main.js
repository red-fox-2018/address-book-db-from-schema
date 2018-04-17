const argv= process.argv
const {CreateTable}=require('./setup.js')
const {ContactController,GroupController} = require('./controller.js')
let command =argv[2]

if(command=="createTable"){
    let table_name = argv[3]
    if(table_name=="contacts"){
        let contacts = 'CREATE TABLE IF NOT EXISTS contacts (Id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,company TEXT,phone INTEGER,email TEXT)'
        CreateTable.tableCreator(contacts)
    }
    else if(table_name=="group"){
        let group='CREATE TABLE groups(Id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, contactId INTEGER,FOREIGN KEY(contactId) REFERENCES contacts(Id))'
        CreateTable.tableCreator(group)
    }
   else if(table_name=="contactGroup"){
       let contactGroup='CREATE TABLE contactGroup(Id INTEGER PRIMARY KEY AUTOINCREMENT,contactId INTEGER, groupId INTEGER,FOREIGN KEY(contactId) REFERENCES contacts(Id),FOREIGN KEY(groupId) REFERENCES groups(Id))'
       CreateTable.tableCreator(contactGroup)
   }
}

else if(command=="newContact"){
    let name=argv[3]
    let company=argv[4]
    let phone=argv[5]
    let email=argv[6]

    ContactController.newContact(name,company,phone,email)

}

else if(command=="newGroup"){
    let nama=argv[3]
    GroupController.newGroup(nama)
}

else if(command=="deleteContact"){
    let name=argv[3]
    ContactController.deleteContact(name)
}

else if(command=="readContact"){
    ContactController.readContact()
}