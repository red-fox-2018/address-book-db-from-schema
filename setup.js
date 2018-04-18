/*jshint esversion:6*/

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');

function addContact(){
  db.run(`CREATE TABLE Contacts (id INTEGER PRIMARY KEY AUTOINCREMENT,nama VARCHAR(20),perusahaan VARCHAR(20),phone VARCHAR(20), email VARCHAR(30))`);
}

function addGroup(){
  db.run(`CREATE TABLE Groups (id INTEGER PRIMARY KEY AUTOINCREMENT,namaGroup VARCHAR(20))`);
}

function addContactGroup(){
  db.run(`CREATE TABLE ContactsGroups (id INTEGER PRIMARY KEY AUTOINCREMENT,contactID INTEGER,groupID INTEGER`);
}

addContact();
addGroup();
addContactGroup();
