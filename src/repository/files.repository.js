export default class FileRepository {
    constructor() {
        this.index = 0
        this.files = []
    }

    getFile(id) {
        let file = this.files[id]
        if (file) {
            console.log(`Repo here. We got a file ${file.name}`)
            return file
        }
        console.log(`Repo here. We got no file here`)
        return null
    }

    createFile(f) {
        let i = this.index++
        console.log(`Repo here. We got a file ${f.name}`)
        this.files[i] = f
        return i
    }

    updateFile(id, file) {
        if (this.files[id]) {
            this.files[id] = file
            return true
        }
        return false
    }

    deleteFile(id) {
        if (this.files[id]) {
            this.files[id] = null
            return true
        }
        return false
    }
}
