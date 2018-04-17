const contact = require('./models/contact')
const group = require('./models/group.js')
const contactGroup = require('./models/contact-group.js')
const view = require('./view.js')
class Controller {
  static insertContact(name, perusahaan, phone, email,call){
      var valueInsert = contact.saveContact(name, perusahaan, phone, email, statInsert =>{
        view.print(statInsert)
      })
  }
  static updateContact(name, perusahaan, phone, email,id){
      contact.saveUpdateContact(name, perusahaan, phone, email,id,statUpdate=>{
        view.print(statUpdate)
      })
  }
  static deleteContact(id){
      contact.deleteContactDB(id,statDel=>{
        view.print(statDel)
      })
  }
  static insertGroup(name){
      group.saveAddGroup(name, statInsert=>{
        view.print(statInsert)
      })
  }
  static updateGroup(name,id){
      group.saveUpdateGroup(name,id, statUpdateGroup=>{
        view.print(statUpdateGroup)
      })
  }
  static deleteGroup(id){
      group.deletGroupDB(id, statDel=>{
        view.print(statDel)
      })
  }
  static insertContactToGroup(contactId, groupId){
      contactGroup.saveContactToGroup(contactId, groupId,statCreateContactToGroup=>{
        view.print(statCreateContactToGroup)
      })
  }
  static deletContactFromGroup(contactId, groupId){
      contactGroup.removeContactFromGroup(contactId, groupId,statDelet =>{
        view.print(statDelet)
      })
  }
  static show(){
    contactGroup.getList(listContact=>{
        view.print(listContact)
    })
  }
}

module.exports = Controller
