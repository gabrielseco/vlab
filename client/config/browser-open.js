const open = require('open');

const { HOST, PORT, PROTOCOL } = require('./env/dev.env');

open(`${PROTOCOL}${HOST}:${PORT}`);
