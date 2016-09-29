var bluebird = require('bluebird');

require('babel-runtime/core-js/promise').default = bluebird;

window.Promise = bluebird;

require('./index');
