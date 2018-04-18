/*jshint esversion:6*/

class View{
  static addContactView(){
    console.log('selamat kamu berhasil melakukan add contact');
  }

  static updateContactView(){
    console.log('selamat kamu berhasil mengupdate data contact');
  }

  static deleteContactView(){
    console.log('ID berhasil di delete');
  }

  static showListContacts(data){
    console.log(data);
  }

  static addGroupsView(){
    console.log('selamat kamu berhasil melakukan add group');
  }

  static updateGroupsView(){
    console.log('selamat kamu berhasil mengupdate data group');
  }

  static deleteGroupsView(){
    console.log('Group berhasil di delete');
  }

  static showListGroups(data){
    console.log(data);
  }
}







module.exports = View;
