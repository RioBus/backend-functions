const functions = require('firebase-functions');
const admin = require('firebase-admin');

let client = null;

exports.getInstance = () => {
    if (!client) client = admin.initializeApp(functions.config().firebase);
    return client;
}
