const Contact = require('../models/ModelContact').Contact
const ViewContact = require('../Views/ViewContact').ViewContact

class controllerContact{
    static addContact(objAddContact){

        let name = objAddContact.name
        let company = objAddContact.company
        let telephonNumber = objAddContact.telephonNumber
        let email = objAddContact.email

        let contact = new Contact(objAddContact)
        Contact.save(contact, (status)=>{
            ViewContact.showNotifAddContact(status)
        })

    }

}
module.exports = {controllerContact}