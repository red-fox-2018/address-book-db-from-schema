const Group = require('../model/group')
const View = require('../View/view')

class GroupController {

    static addGroup(name) {

        Group.create(name, function(err,msg){
            if(err){
                View.display(err)
            }else {
                View.display(msg)
            }
        })
    }

    static updateGroup(id,name) {

        Group.update(id,name,function(err,msg){
            if(err){
                View.display(err)
            }else {
                View.display(msg)
            }
        }) 
    }

    static deleteGroup(id) {

        Group.delete(id,function(err,msg){
            if(err){
                View.display(err)
            }else {
                View.display(msg)
            }
        })
    }
}

module.exports = GroupController