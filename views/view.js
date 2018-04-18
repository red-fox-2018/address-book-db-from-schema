/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/
/*jshint -W083*/
/*jshint -W138*/

const Table = require('cli-table');
const chalk = require('chalk');

class View {

   static display(dis) {
      console.log(dis);
   }

   static displayShowContact(data) {
      let table = new Table({
         head: ['No', 'Name', 'Company', 'Phone Number', 'Email', 'Group Name'],
         colWidths: [5, 18, 20, 18, 25, 15]
      });

      let no = 1;
      for (let i = 0; i < data.length; i++) {
         table.push([`${no}`, `${data[i].contactName}`, `${data[i].company}`, `${data[i].phone_number}`, `${data[i].email}`, `${data[i].groupName}`]);
         no++;
      }
      console.log(table.toString());
   }

   static displayShowGroup(data){
     let table = new Table({
        head: ['No', 'Name'],
        colWidths: [5, 18]
     });

     let no = 1;
     for (let i = 0; i < data.length; i++) {
        table.push([`${no}`, `${data[i].name}`]);
        no++;
     }
     console.log(table.toString());
   }
}

module.exports = View;
