const {Contact, Group, Model}= require('./models/model')
const View = require('./view')


class Controller{
    static saveContact(name,company,telp,email){
        let contact= new Contact(name, company, telp, email)
        contact.save(function (message) {
            View.show(message)
        })
    }
 
    static updateContact(property,value,id){
        let contact = new Contact()
        contact.update(property, value, id, function (message) {
            View.show(message)
        })
    }

    static deleteContact(deleteId) {
        let contact = new Contact()
        contact.delete(deleteId, function (message) {
            View.show(message)
        })
    }
    static saveGroup(name){
        let group = new Group(name)
        group.save( function (message) {
            View.show(message)
        })
    }
    static updateGroup(groupsValue,groupsId){
        let group = new Group()
        group.update(groupsValue,groupsId,function (message) {
            View.show(message)
        })
    }
    static deleteGroup(deleteId) {
        let group = new Group()
        group.delete(deleteId, function (message) {
            View.show(message)
        })
    }
    static assign(contactId,groupsId){
        Model.assign(contactId, groupsId, function (message) {
            View.show(message)
        })
    }
    static showContact(){
        Model.showContact(function (message) {
            View.show(message)
        })
    }
    static showGroup(){
        Model.showGroup(function (message) {
            View.show(message)
        })
    }
    
}
module.exports = Controller