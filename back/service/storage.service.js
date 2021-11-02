const fs = require('fs')
const uuid = require('uuid')
// {"users":[]}
class StorageService {
    constructor() {
        this.pathToFile = './service/storage.json'
    }

    getAll() {
        const rawdata = fs.readFileSync(this.pathToFile);
        return JSON.parse(rawdata)
    }
    getAllUsers() {
        const {users} = this.getAll()
        return users
    }
    reset() {
        fs.writeFileSync(this.pathToFile, JSON.stringify({"users":[]}))
    }
    addUser(user) {
        try {
            const allData = this.getAll()
            console.log(allData)
            const newData = {
                ...allData,
                users: [...allData.users, {
                    ...user,
                    id: uuid.v4()
                }]
            }
            const res = fs.writeFileSync(this.pathToFile, JSON.stringify(newData))
            //file written successfully
          } catch (err) {
            console.error(err)
          }
    }
    updateUser(id, userData) {
        try {
            const allData = this.getAll()
            const newData = {
                ...allData,
                users: allData.users.map(user => {
                    if(user.id === id) {
                        return {
                            ...user,
                            ...userData
                        }
                    }
                    return user
                })
            }
            const res = fs.writeFileSync(this.pathToFile, JSON.stringify(newData))
            //file written successfully
          } catch (err) {
            console.error(err)
          } 
    }
}

module.exports = new StorageService()