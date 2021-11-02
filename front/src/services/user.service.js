class UserService {
    constructor() {
        this.endpoint = 'http://localhost:3003/users'
    }
    async create(user) {
        try {
            return fetch(this.endpoint, {
                method: 'post',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                } 
            })
            
        } catch (error) {
            console.log(error)
        }
    }
    async getUsers() {
        const data = await fetch(this.endpoint)
        return await data.json()
    }
}

export const userService = new UserService()