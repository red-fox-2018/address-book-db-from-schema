/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/

const GroupModel = require('../models/group');
const View = require('../views/view');

class GroupController {
   static addGroup(name) {
      GroupModel.add(name, (dis) => {
         View.display(dis);
      });
   }
   static updateGroup(name, group_id) {
      GroupModel.update(name, group_id, (dis) => {
         View.display(dis);
      });
   }
   static deleteGroup(group_id) {
      GroupModel.delete(group_id, (dis) => {
         View.display(dis);
      });
   }
}

module.exports = GroupController;
