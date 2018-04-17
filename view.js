class View{

    static help(){
        console.log('=============================================================================')
        console.log('1. ADD CONTACT: node index.js {add contact} [company] [phone] [email] [fullname]')
        console.log('2. SHOW CONTACT: node index.js {show contact}')
        console.log('3. DELETE CONTACT: node index.js {delete contact} [id]')
        console.log('4. UPDATE CONTACT: node index.js {update contact} [column] [id] [update]')
        console.log('5. CREATE GROUP: node index.js {create group} [groupName]')
        console.log('6. DELETE GROUP: node index.js {delete group} [id]')
        console.log('7. ADD TO GROUP: node index.js {add:to group} [Contactid] [Groupid]')
        console.log('=============================================================================')
    }

    static addContactMessageAllert(addedData, status){
        if(status == true){
            console.log('Contact Successfull Added')
            console.log('=========================')
            console.log('Detail Contact: ')
            console.log(`name: ${addedData[0]}\ncompany: ${addedData[1]}\nphone: ${addedData[2]}\nemail: ${addedData[3]}`)
        }
    }

    static showContactInfo(contacts){
        console.log('All Contact:')
        console.log('============')
        for(let obj of contacts){
            console.log(`ID: ${obj.id}`)
            console.log(`Name: ${obj.name}`)
            console.log(`Company: ${obj.company}`)
            console.log(`Phone: ${obj.phone}`)
            console.log(`Email: ${obj.email}`)
        }
    }

    static deleteContactMessageAllert(status){
        if(status == true){
            console.log(`Contact Deleted !!`)
        }
    }

    static updateContactMessageAllert(status){
        if(status == true){
            console.log(`Contact Updated !!`)
        }
    }

    static createGroupAllert(status){
        if(status == true){
            console.log(`Group Created !!`)
        } 
    }

    static deleteGroupMessageAllert(status){
        if(status == true){
            console.log(`Group Deleted !!`)
        }
    }

    static addToGroupAllert(Cname, Gname, status){
        if(status == true){
            console.log(`${Cname} Success Added to ${Gname}`)
        }
    }

    static showGroupMemberInfo(dataMember){
        let i = 1;
        console.log(`Group ${dataMember[0].name}:`)
        console.log('============================')
        for(let obj of dataMember){
            console.log(i+'. '+obj.contactsName)
            i++
        }
    }
}

module.exports = View