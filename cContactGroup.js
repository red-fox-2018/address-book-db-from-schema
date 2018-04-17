var ContactGroup = require('./contact-group.js')
var View = require('./view.js')

class ControllerContactGroup {

  static show() {
    ContactGroup.show((contactGroupList) => {
      View.showGroup(contactGroupList)
    })
  }

  static add(obj) {
    ContactGroup.add(obj, (newContactGroup) => {
      View.addGroup(newContactGroup)
    })
  }

  static update(obj) {
    ContactGroup.update(obj, (updatedGC) => {
      View.updateGC(updatedGC)
    })
  }

  static delete(obj) {
    ContactGroup.updeletedate(obj, (deletedGC) => {
      View.deleteGC(deletedGC)
    })
  }

}

module.exports = ControllerContactGroup
