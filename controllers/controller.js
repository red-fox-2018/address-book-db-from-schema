const Contact = require('../models/contact')
const Group = require('../models/group')
const ContactGroup = require('../models/contact-group')
const View = require('../views/view')


class Controller {

    static createContact(name, company, phone, email, cb){
        Contact.create(name, company, phone, email, data =>{
            View.print(data)
        })
    }

    static updateContact(id, param, newValue, cb){
        Contact.update(id, param, newValue, data =>{
            View.print(data)
        })
    }

    static deleteContact(name, cb){
        Contact.delete(name, data =>{
            View.print(data)
        })
    }

    static createGroup(name, cb){
        Group.create(name, data =>{
            View.print(data)
        })
    }

    static updateGroup(id, param, newValue, cb){
        Group.update(id, param, newValue, data =>{
            View.print(data)
        })
    }

    static deleteGroup(name, cb){
        Group.delete(name, data =>{
            View.print(data)
        })
    }

    static assignContactToGroup(contactName, groupName, cb){
        ContactGroup.assign(contactName, groupName, data =>{
            View.print(data)
        })
    }

    static showContact(cb){
        Contact.show((err, data)=>{
            if(!err){
                View.print(data)
            } else {
                View.print(err)
            }
        })
    }

}

module.exports = Controller