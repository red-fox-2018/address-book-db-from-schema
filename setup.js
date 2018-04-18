var sqlite3=require('sqlite3').verbose();
var db = new sqlite3.Database('./address_book.db');


	db.run(`CREATE TABLE IF NOT EXISTS Contacts(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, company TEXT,nomor_telpon TEXT,email TEXT )`,function(err) {
		if(err){
			console.log(err)	
		}else{
			console.log('berhasil')
		}
		
	})
	db.run(`CREATE TABLE IF NOT EXISTS Groups(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT)`)
	db.run(`CREATE TABLE IF NOT EXISTS Group_Contacts(id INTEGER PRIMARY KEY AUTOINCREMENT,contactId INTEGER,groupId INTEGER,FOREIGN KEY (contactId) REFERENCES Contacts(id),FOREIGN KEY (groupId) REFERENCES Groups(id))`)

db.close();