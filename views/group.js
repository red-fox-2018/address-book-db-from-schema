class ViewGroup {
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
    console.log(`Added Group ${data.group_name} successfully`);
  }

  static succesUpdate(){
    console.log(`Group updated`);
  }

  static succesDelete(){
    console.log(`Group deleted`);
  }
}

module.exports = ViewGroup;
