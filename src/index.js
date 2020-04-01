import config from 'config';
import express from 'express';

const debug = require('debug')('server:debug');
const app = express();
const port = config.get('port');
const name = config.get('name');

const listen = app.listen(port, () => {
    debug(`server is running on port ${port} and in ${name} mode`);
    console.log(`server is running on port ${port} and in ${name} mode`);
})

module.exports = app;
// module.exports.port = listen.address().port;