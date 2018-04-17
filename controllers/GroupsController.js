
const { ContactsModel, GroupsModel } = require('./../models');
const View = require('./../views/view');

class GroupsController {
  static showList() {
    GroupsModel.getAll((groupList) => {
      View.showList(groupList);
    });
  }
  static showById(values) {
    let id = values[0];
    GroupsModel.findById(id, (result) => {
      View.showOne(result);
    })
  }
  static add(values) {
    // @ name, company, phone, email
    let name = values[0];

    GroupsModel.addOne(name, (result) => {
      if (result == 1) {
        View.showString(`Behasil menambahkan group!`);
      } else {
        View.showString(`Gagal menambahkan group!`);
      }
    });
  }
  static deleteOne(values) {
    let id = values[0];
    GroupsModel.deleteById(id, (result) => {
      if (result == 1) {
        View.showString(`Behasil menghapus group!`);
      } else {
        View.showString(`Gagal menghapus group!`);
      }
    });
  }
}

module.exports = GroupsController;