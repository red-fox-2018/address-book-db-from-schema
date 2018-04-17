const Contact = require('./contact.js');
const Group = require('./group.js');
const View = require('./view.js');

class Controller {
  static addContact(name,company,telephoneNumber,email){
    Contact.add(name,company,telephoneNumber,email, (err,addStatus,contact,totalContact)=>{
      if (err) {
        View.errorMessage(err);
      } else {
        View.showMessage(addStatus)
        View.showMessage(contact)
        View.showMessage(`Total contacts : ${totalContact}`)
      }
    })
  }
  static showContact(){
    Contact.show((err,listContact)=>{
      if (err) {
        View.errorMessage(err);
      } else {
        View.showMessage(listContact)
      }
    })
  }
  static updateContact(columnName,columnValue,id){
    Contact.update(columnName,columnValue,id,(err,contact,updateStatus) =>{
      if (err) {
        View.errorMessage(err);
      } else {
        View.showMessage(updateStatus)
        View.showMessage(contact)
      }
    })
  }
  static deleteContact(id){
    Contact.deleteContact(id,(deleteStatus) => {
      View.showMessage(deleteStatus)
    })
  }
  static addGroup(name){
    Group.add(name,(err,addStatus,group,totalGroup)=>{
      if (err) {
        View.errorMessage(err);
      } else {
        View.showMessage(addStatus)
        View.showMessage(group)
        View.showMessage(`Total groups : ${totalGroup}`)
      }
    })
  }
  static showGroup(){
    Group.show((err,listGroup)=>{
      if (err) {
        View.errorMessage(err);
      } else {
        View.showMessage(listGroup)
      }
    })
  }
  static updateGroup(columnValue,id){
    Group.update(columnValue,id,(err,group,updateStatus) =>{
      if (err) {
        View.errorMessage(err);
      } else {
        View.showMessage(updateStatus)
        View.showMessage(group)
      }
    })
  }
  static deleteGroup(id){
    Group.deleteGroup(id,(deleteStatus) => {
      View.showMessage(deleteStatus)
    })
  }
  static addCToG(contactName,groupName){
    Group.insertContact(contactName,groupName,(err,insertStatus,conjunction) =>{
      if (err) {
        View.errorMessage(err)
      } else {
        View.showMessage(insertStatus)
        View.showMessage(conjunction)
      }
    })
  }
}

module.exports = Controller
