const functions = require('firebase-functions');

const api = require('./api');
const crawler = require('./crawler');

exports.v3 = functions.https.onRequest(api);
exports.crawler = functions.pubsub.schedule('every 3 seconds').onRun(crawler);

