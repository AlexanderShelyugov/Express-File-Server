import express from 'express'
import config from 'config'
const app = express()
const port = config.get('port')
app.listen(port,()=>
    console.log(`Server is listening on port ${port}`))
module.exports = app;