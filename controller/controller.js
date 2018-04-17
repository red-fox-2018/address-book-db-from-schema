const Contact = require('../model/contact')
const Group = require('../model/group')
const View = require('../view/view')

class Controller{
    static listContact(){
        Contact.listContact(list)
        function list(err,listContact){
            if(err){
                View.methodView(err)
            }else{
                View.methodView(listContact)
            }
        }
    }

    static addContact(name,company,phoneNumber,email){
        let addContact = new Contact(name,company,phoneNumber,email)
        addContact.addContact(dataContact)
        function dataContact(err,addContact){
            if(err){
                View.methodView(err)
            }else{
                View.methodView(addContact)
            }
        }
    }

    static updateContact(id,kolom,value){
        Contact.updateContact(id,kolom,value,update)
        function update(err,updateContact){
            if(err){
                View.methodView(err)
            }else{
                View.methodView(updateContact)
            }
        }
    }

    static deleteContact(id){
        Contact.deleteContact(id,deleted)
        function deleted(err,deleteContact){
            if(err){
                View.methodView(err)
            }else{
                View.methodView(deleteContact)
            }
        }
    }

    static listGroup(){
        Group.listGroup(list)
        function list(listGroup,err){
            if(err){
                View.methodView(err)
            }else{
                View.methodView(listGroup)
            }
        }
    }

    addGroup(name){
        let addGroup = new Group(name)
        addGroup.addGroup(dataGroup)
        function dataGroup(err,addGroup){
            if(err){
                View.methodView(err)
            }else{
                View.methodView(addGroup)
            }
        }
    }

    static updateGroup(id,kolom,value){
        Group.updateGroup(id,kolom,value,update)
        function update(err,updateGroup){
            if(err){
                View.methodView(err)
            }else{
                View.methodView(updateGroup)
            }
        }
    }

    static deleteGroup(id){
        Group.deleteGroup(id,deleted)
        function deleted(err,deleteGroup){
            if(err){
                View.methodView(err)
            }else{
                View.methodView(deleteGroup)
            }
        }
    }

    static assignContactGroup(contactId, groupsId){
        Group.assignContactGroup(assign)
        function assign(err,assignContactGroup){
            if(err){
                View.methodView(err)
            }else{
                View.methodView(assignContactGroup)
            }
        }
    }
}

module.exports = Controller