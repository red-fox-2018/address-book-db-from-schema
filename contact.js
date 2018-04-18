var sqlite3=require("sqlite3").verbose();
var db = new sqlite3.Database('./address_book.db')


class Contact {
	
	static save(name,company,nomor_telpon,email,cb) {
		db.run(`INSERT INTO Contacts (name,company,nomor_telpon,email) VALUES ("${name}","${company}","${nomor_telpon}","${email}")`,function(err) {
				if(err) {
					cb(err);
				}else {
					cb(`kontek berhasil disimpan`)
				}
		})
	}

	static update(changeName,changeCompany,changeNumber,changeEmail,id,cb) {
		db.run(`UPDATE Contacts SET name = "${changeName}",company = "${changeCompany}",nomor_telpon = "${changeNumber}",email = "${changeEmail}" WHERE id = ${id}`,function(err) {
			if(err) {
				throw err;
			}else {
				cb(`kontek telah di update`)
			}
		})
	}

	static delete(id,cb) {
		db.run(`DELETE FROM Contacts WHERE id = ${id}`,function(err) {
			if(err) {
				throw err;
			}else{
				cb('kontek berhasil di hapus')
			}
		})
	}

	static showContact(id,cb) {
		db.all(`SELECT Contacts.name AS ContactName,company,nomor_telpon,email,Groups.name AS GroupName FROM Contacts LEFT JOIN Group_Contacts ON Contacts.id = Group_Contacts.contactId LEFT JOIN Groups ON Group_Contacts.groupId = Groups.id	WHERE Contacts.id = ${id}`,function(err,rows) {
				if(err) {
			 	 	cb(err,null)
				 }else{
					// console.log(err);
					// console.log(rows)
					var groupName=" "
						for(let i=0;i<rows.length;i++) {
						groupName += rows[i].GroupName + ' '
						}
						//console.log(groupName)
					cb(null,`${rows[0].ContactName} ${rows[0].company} ${rows[0].nomor_telpon} ${rows[0].email} ${groupName}`)
				}
			}
		)
	}

	

	
}

// Contact.save("Boni","nusaindah","3672932","foni@gmail.com")
// Contact.update('asd','aasd','asd','asd',1)
//Contact.showContact(1);

module.exports= Contact