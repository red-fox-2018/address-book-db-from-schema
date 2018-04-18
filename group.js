var sqlite3=require("sqlite3").verbose();
var db = new sqlite3.Database('./address_book.db')

class Group {

	static save(name) {
		db.run(`INSERT INTO Groups(name) VALUES ("${name}")`,function(err) {
			if(err) {
				console.log('error')
			}else {
				console.log('berhasil')
			}
		})
	}


	static update(changeName,id) {
		db.run(`UPDATE Groups SET name = ${changeName} WHERE id = ${id}`,function(err) {
			if(err) {
				console.log('error')
			}else {
				console.log('berhasil')
			}
		})
	}

	static showGroup() {
		db.all(`SELECT * FROM Groups`,function(err,rows) {
			if(err) {
				console.log('error')
			}else {
				console.log(rows);
			}
		})
	}

	static deleteGroup(id) {
		db.run(`DELETE FROM Groups WHERE id = ${id}`)
		db.run(`DELETE FROM Group_Contacts WHERE id=${id}`)
	}
}


//Group.save('School');
Group.showGroup();