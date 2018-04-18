const Controller = require("./controller.js")
var argv=process.argv;
var command=argv[2];


if(command == 'insertContact') {
	Controller.insertContact(argv[3],argv[4],argv[5],argv[6])
}else if(command == 'updateContact') {
	Controller.updateContact(argv[3],argv[4],argv[5],argv[6],argv[7])
}else if(command == 'deleteContact') {
	Controller.deleteContact(argv[3])
}else if(command == 'showContact') {
	Controller.showContact(argv[3])
}



