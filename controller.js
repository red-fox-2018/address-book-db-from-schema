const Model = require('./model')
const View = require('./view')

class Controller{

    static help(){
        View.help()
    }

    static add(command2, company, phone, email, name, callback){
        if(command2 == 'contact'){
            Model.addContact(company, phone, email, name, function(addedData, status){
                View.addContactMessageAllert(addedData, status)
            })
        }
    }

    static show(){
        Model.showContact(function(contactGroupData){
            View.showContactInfo(contactGroupData)
        })
    }

    static delete(command2, id){
        if(command2 == 'contact'){
            Model.deleteContact(id, function(status){
                View.deleteContactMessageAllert(status)
            })
        }
        else if(command2 == 'group'){
            Model.deleteGroup(id, function(status){
                View.deleteGroupMessageAllert(status)
            })
        }
    }

    static update(command2, command3, id, update){
        if(command2 == 'contact'){
            Model.updateContact(command3, id, update, function(status){
                View.updateContactMessageAllert(status)
            })
        }
    }

    static create(groupName){
        Model.createGroup(groupName, function(status){
            View.createGroupAllert(status)
        })
    }

    static addToGroup(contactID, groupID){
        Model.addToGroup(contactID, groupID, function(Cname, Gname, status){
            View.addToGroupAllert(Cname, Gname, status)
        })
    }

    static showMemberGroup(groupName){
        Model.showMemberGroup(groupName, function(dataMember){
            View.showGroupMemberInfo(dataMember)
        })
    }
}

module.exports = Controller