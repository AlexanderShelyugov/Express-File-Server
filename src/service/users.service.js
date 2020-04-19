import bcrypt from 'bcrypt'

import { UserRepository as Repository } from '../repository'

class UserService {
    constructor() {
        this.r = new Repository()
    }

    findById(id) {
        return this.r.findById(id)
    }

    findByEmail(email) {
        return r.findByEmail(email)
    }

    createUser(email, password) {
        bcrypt.hash(password, 10).then((hashedPassword) => {
            this.r.createUser(email, hashedPassword)
        })
    }
}

const userService = new UserService()

export default userService