class ViewContact {
  static showErr(err){
    console.log(err);
  }

  static showData(data){
    data.forEach(objData =>{
      console.log(Object.values(objData).join(" "));
    })
    // console.log(data);
  }

  static succesAdd(data){
    let newContact = JSON.stringify(data)
    console.log(`Added ${data.phone} to contact successfully`);
  }

  static succesUpdate(){
    console.log(`Contact updated`);
  }

  static succesDelete(){
    console.log(`Contact deleted`);
  }
}

module.exports = ViewContact;
