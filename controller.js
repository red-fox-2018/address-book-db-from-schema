const View = require('./view.js')
const Contact = require('./contact.js')


class Controller {

	static insertContact(name,company,nomor_telpon,email) {
		Contact.save(name,company,nomor_telpon,email,function(result) {
			View.insertContact(result)
		})
	}

	static updateContact(changeName,changeCompany,changeNumber,changeEmail,id) {
		Contact.update(changeName,changeCompany,changeNumber,changeEmail,id,function(result) {
			View.updateContact(result)
		})
	}

	static deleteContact(id) {
		Contact.delete(id, function(result){
			View.deleteContact(result)
		})
	}

	static showContact(id) {
		Contact.showContact(id,function(err,data) {
				if(err) {
					console.log("====",err)
				}else{
				//console.log(err)
				//console.log(data)
				View.showContact(data);
			}
			
		})
	}


}








module.exports = Controller;