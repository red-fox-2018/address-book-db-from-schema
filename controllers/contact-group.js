/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/


const ContactGroupModel = require('../models/contact-group');
const View = require('../views/view');

class ContactGroupController {

   static addGroupContact(contact_id, group_id) {
      ContactGroupModel.add(contact_id, group_id, (dis) => {
         View.display(dis);
      });
   }
   static updateGroupContact(contact_id, group_id) {
      ContactGroupModel.update(contact_id, group_id, (dis) => {
         View.display(dis);
      });
   }

   static deleteGroupContact(contact_groups_id) {
      ContactGroupModel.delete(contact_groups_id, (dis) => {
         View.display(dis);
      });
   }
}
module.exports = ContactGroupController;
