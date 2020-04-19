export default class UserRepository {
    constructor() {
        this.index = 0
        this.users = [
            {
                id: '1585912908300',
                email: 'email@gmail.com',
                password: '$2b$10$HDptH0HeMnr4nU7CxBAVeuQxBs01RoEohwmK8o867YLHvLCycXz/m'
            }
        ]
    }

    findById(id) {
        if (id == null) {
            return null
        }
        return this.users.find(user => user.id === id)
    }

    findByEmail(email) {
        if (email == null) {
            return null
        }
        return this.users.find(user => user.email === email)
    }

    createUser(email, password) {
        this.users.push({ id: Date.now().toString(), email, password })
        console.log(this.users)
    }
}
