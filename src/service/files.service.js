import { FileRepository as Repository } from '../repository'

export default class FileService {
    constructor() {
        this.r = new Repository()
    }

    getFile(id) {
        return this.r.getFile(id)
    }

    saveFile(file) {
        return this.r.createFile(file)
    }

    updateFile(id, file) {
        return this.r.updateFile(id, file)
    }

    deleteFile(id) {
        return this.r.deleteFile(id)
    }
}