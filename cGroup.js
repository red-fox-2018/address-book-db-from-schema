var Group = require('./group.js')
var View = require('./view.js')

class ControllerGroup {

  static show() {
    Group.show((groupList) => {
      View.showGroup(groupList)
    })
  }

  static add(objGroup) {
    Group.add(objGroup, (newGroup) => {
      View.addGroup(newGroup)
    })
  }

}

module.exports = ControllerGroup
