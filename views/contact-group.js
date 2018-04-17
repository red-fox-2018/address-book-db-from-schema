class ViewGroup {
  static showErr(err){
    console.log(err);
  }

  static showErrDelete(err, contact, group){
    console.log(`${Object.values(contact)} not found in Group ${Object.values(group)}`);
  }

  static showData(data){
    data.forEach(objData =>{
      console.log(Object.values(objData).join(" "));
    })
    // console.log(data);
  }

  static succesAdd(contact, group){
    console.log(`Added ${contact.name} to ${group.group_name} Group successfully`);
  }

  static succesDelete(){
    console.log(`Contact deleted from Group`);
  }

}

module.exports = ViewGroup;
