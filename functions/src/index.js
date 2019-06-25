const functions = require('firebase-functions');

const api = require('./api');

exports.v3 = functions.https.onRequest(api);
