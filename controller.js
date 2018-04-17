const {Contact}=require('./models/contact.js')
const {Group}=require('./models/group.js')

class ContactController{
    static newContact(name,company,phone,email){
        let newContact = new Contact(name,company,phone,email)
        Contact.newContact(newContact)
    }

    static deleteContact(name){
        Contact.deleteContact(name)
    }

    static readContact(){
        Contact.readContact()
    }
}

class GroupController{
    static newGroup(name){
        let newGroup = new Group(name)
        Group.newGroup(newGroup)
    }
}

module.exports={ContactController,GroupController}