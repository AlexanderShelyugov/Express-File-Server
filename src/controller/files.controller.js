import express from 'express'
import _ from 'lodash'

import { FileService as Service, infoOf } from '../service'

const filesController = express.Router()
const fileService = new Service()

filesController.get('/file/:id', async (req, res) => {
    let file = fileService.getFile(req.params.id)
    if (!file) {
        return res.status(404).send('No such file')
    }
    res.send(infoOf(file))
})

filesController.get('/download/:id', async (req, res) => {
    let file = fileService.getFile(req.params.id)
    if (!file) {
        return res.status(404).send('No such file')
    }
    res.writeHead(200, {
        'Content-Type': file.mimetype,
        'Content-disposition': 'attachment;filename=' + file.name,
        'Content-Length': file.size
    });
    res.end(file.data, 'binary')
})

filesController.post("/file/upload", async (req, res) => {
    try {
        if (!req.files || _.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        let id
        let file
        _.forEach(_.keys(req.files), (i) => {
            file = req.files[i]
            id = fileService.saveFile(file)
        });
        file = infoOf(file)
        file.id = id
        res.send(file)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

filesController.delete('/file/:id', async (req, res) => {
    let removed = fileService.deleteFile(req.params.id)
    if (removed) {
        return res.send('File removed')
    }
    res.status(404).send('No file here')
})

export default filesController
