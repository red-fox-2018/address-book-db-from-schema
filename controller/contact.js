const Contact = require('../model/contact')
const View = require('../View/view')

class ContactController {

    static showContact() {
        Contact.show(function(err,rows){
            if(err){
                View.display(err)
            }else {
                View.display(rows)
            }
        })
    }

    static addContact(name, company, phone, email) {

        Contact.create(name, company, phone, email, function(err,msg){
            if(err){
                View.display(err)
            }else {
                View.display(msg)
            }
        })
    }

    static updateContact(id,name, company, phone, email) {

        Contact.update(id,name,company,phone,email, function(err,msg){
            if(err){
                View.display(err)
            }else {
                View.display(msg)
            }
        }) 
    }

    static deleteContact(id) {

        Contact.delete(id,function(err,msg){
            if(err){
                View.display(err)
            }else {
                View.display(msg)
            }
        })
    }
}

module.exports = ContactController