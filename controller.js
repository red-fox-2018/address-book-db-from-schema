/*jshint esversion:6*/
const Contact = require('./contact');
const Group = require('./group');
const View = require('./View');

class Controller{
  static saveContact(nama,perusahaan,phone,email){
    let kontak = new Contact(nama,perusahaan,phone,email,null,null,null);
    kontak.save((err)=>{
      if(err){
        throw err;
      }
    });
    View.addContactView();
  }

  static updateContact(id,yangInginDirubah,value){
    let kontak = new Contact(null,null,null,null,id,yangInginDirubah,value);
    kontak.updateContact((err)=>{
      if(err){
        throw err;
      }
    });
    View.updateContactView();
  }

  static deleteContact(id){
    let kontak = new Contact(null,null,null,null,id,null,null);
    kontak.deleteContact((err)=>{
      if(err){
        throw err;
      }
    });
    View.deleteContactView();
  }

  static showContacts(){
    let kontak = new Contact(null,null,null,null,null,null,null);
    kontak.showContacts((err,data)=>{
      if(null,data){
        View.showListContacts(data);
      }else{
        if(err,null){
          throw err;
        }
      }
    });
  }

  static addGroup(nama){
    let grup = new Group(nama,null,null);
    grup.addGroup((err)=>{
      if(err){
        throw err;
      }
    });
    View.addGroupsView();
  }

  static updateGroup(id,updateName){
    let grup = new Group(null,id,updateName);
    grup.updateGroup((err)=>{
      if(err){
        throw err;
      }
    });
    View.updateGroupsView();
  }

  static deleteGroup(id){
    let grup = new Group(null,id,null);
    grup.deleteGroup((err)=>{
      if(err){
        throw err;
      }
    });
    View.deleteGroupsView();
  }

  static showListGroups(){
    let grup = new Group(null,null,null);
    grup.showGroups((err,data)=>{
      if(null,data){
        View.showListGroups(data);
      }else{
        if(err,null){
          throw err;
        }
      }
    });
  }
}






module.exports = Controller;
