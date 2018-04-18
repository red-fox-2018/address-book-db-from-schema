/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/


const ContactModel = require('../models/contact');
const View = require('../views/view');

class ContactController {

   static addContact(name, company, phone_number, email) {
      ContactModel.add(name, company, phone_number, email, (dis2) => {
         View.display(dis2);
      });
   }

   static updateContact(name, company, phone_number, email, contact_id) {
      ContactModel.update(name, company, phone_number, email, contact_id, (dis) => {
         View.display(dis);
      });
   }
   
   static deleteContact(contact_id) {
      ContactModel.delete(contact_id, (dis) => {
         View.display(dis);
      });
   }

   static showContact(cb) {
      ContactModel.show((dis) => {
         View.displayShowContact(dis);
      });
   }
}

module.exports = ContactController;
