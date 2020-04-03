import Repository from '../repository'

export default class FileService {
    constructor() {
        this.repository = new Repository()
    }

    getFile(id) {
        return this.repository.getFile(id)
    }

    saveFile(file) {
        return this.repository.createFile(file)
    }

    updateFile(id, file) {
        return this.repository.updateFile(id, file)
    }

    deleteFile(id) {
        return this.repository.deleteFile(id)
    }
}