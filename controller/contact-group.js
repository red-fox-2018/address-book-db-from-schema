const ContactGroup = require('../model/contact-group')
const View = require('../View/view')

class GroupContactController {

    static addContactGroup(idContact,idGroup) {

        ContactGroup.create(idContact,idGroup, function(err,msg){
            if(err){
                View.display(err)
            }else {
                View.display(msg)
            }
        })
    }

    static updateContactGroup(id,idContact,idGroup) {

        ContactGroup.update(id,idContact,idGroup,function(err,msg){
            if(err){
                View.display(err)
            }else {
                View.display(msg)
            }
        }) 
    }

    static deleteContactGroup(id) {

        ContactGroup.delete(id,function(err,msg){
            if(err){
                View.display(err)
            }else {
                View.display(msg)
            }
        })
    }
}

module.exports = GroupContactController