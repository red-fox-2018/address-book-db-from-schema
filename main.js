var input = process.argv;
const Controller = require('./controller');

var command = input.slice(2);
Controller.getCommand(command);

module.exports = command
