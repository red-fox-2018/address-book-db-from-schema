/*jshint esversion:6*/

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');

class ContactGroup{
  constructor(contactId,groupId){
    this.contactId = contactId;
    this.groupId = groupId;
  }
}
