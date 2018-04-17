const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('address_book.db');

const Contact = require('./contact');
const Group = require('./group');
const Contact_Group = require('./contact-group');

