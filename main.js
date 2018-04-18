/*jshint esversion:6*/

const argv = process.argv;
var command = argv[2];
const Controller = require('./controller');

if(command === 'save'){
  let nama = argv[3];
  let perusahaan = argv[4];
  let phone = argv[5];
  let email = argv[6];
  Controller.saveContact(nama,perusahaan,phone,email);
}else if(command === 'update'){
  let id = argv[3];
  let yangInginDirubah = argv[4];
  let valueBaru = argv[5];
  Controller.updateContact(id,yangInginDirubah,valueBaru);
}else if(command === 'delete'){
  let id = argv[3];
  Controller.deleteContact(id);
}else if(command === 'list'){
  Controller.showContacts();
}else if(command ==='addgroup'){
  let nama = argv[3];
  Controller.addGroup(argv[3]);
}else if(command === 'updategroup'){
  let id = argv[3];
  let valueBaru = argv[4];
  Controller.updateGroup(id,valueBaru);
}else if(command === 'deletegroup'){
  let id = argv[3];
  Controller.deleteGroup(id);
}else if(command === 'showgroup'){
  Controller.showListGroups();
}
