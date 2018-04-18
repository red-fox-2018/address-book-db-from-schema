class View{

    static help(){
        console.log('=============================================================================')
        console.log('1. ADD CONTACT: node index.js {add contact} [company] [phone] [email] [fullname]')
        console.log('2. SHOW CONTACT: node index.js {show contact}')
        console.log('3. DELETE CONTACT: node index.js {delete contact} [id]')
        console.log('4. UPDATE CONTACT: node index.js {update contact} [column] [id] [update]')
        console.log('5. CREATE GROUP: node index.js {create group} [groupName]')
        console.log('6. DELETE GROUP: node index.js {delete group} [id]')
        console.log('7. ADD TO GROUP: node index.js {add:to group} [ContactId] [GroupId]')
        console.log('7. SHOW GROUP MEMBER: node index.js {show group:member} [GroupName]')
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

    static showContactInfo(contactGroupData){
        console.log('All Contact:')
        console.log('============')
        for(let i=0;i<contactGroupData.length;i++){
            let contactData = contactGroupData[i]
            if(contactData.name_group == null){
                contactData.name_group = 'There is no group'
            }
            if(i == 0){
                console.log(`ID: ${contactData.id}`)
                console.log(`Name: ${contactData.name}`)
                console.log(`Company: ${contactData.company}`)
                console.log(`Phone: ${contactData.phone}`)
                console.log(`Email: ${contactData.email}`)
                console.log(`Group: `)
                console.log('-> '+contactData.name_group)
            }
            else if(contactData.name == contactGroupData[i-1].name){
                console.log('-> '+contactData.name_group)
            }
            else{
                console.log('============')
                console.log(`ID: ${contactData.id}`)
                console.log(`Name: ${contactData.name}`)
                console.log(`Company: ${contactData.company}`)
                console.log(`Phone: ${contactData.phone}`)
                console.log(`Email: ${contactData.email}`)
                console.log(`Group: `)
                console.log('-> '+contactData.name_group)
            }
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
            console.log(`${Cname.name} Success Added to ${Gname.name_group}`)
        }
    }

    static showGroupMemberInfo(dataMember){
        let i = 1;
        console.log(`Group ${dataMember[0].name_group}:`)
        console.log('============================')
        for(let obj of dataMember){
            console.log(i+'. '+obj.name)
            i++
        }
    }
}

module.exports = View