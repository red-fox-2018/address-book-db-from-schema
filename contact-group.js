class contactGroups {
    constructor(contactId,groupsId) {
        this.contactId = contactId
        this.groupsId = groupsId
    }
    save() {
        `INSERT INTO contactGroups VALUES(?,?)`
    }
    update(property,value, id) {
        `UPDATE contactGroups SET ${property} = ${value} WHERE id = ${id}`
    }
    delete(id) {
        `DELETE FROM contactGroups WHERE id = ${id} `
    }
}

module.exports = contactGroups