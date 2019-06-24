const functions = require('firebase-functions');
//import * as admin from 'firebase-admin';
//import { getInstance } from './firebase';

//const client: admin.app.App = getInstance();

export const crawler = functions.pubsub.schedule('3 seconds').onRun(context => {
    console.log('Executing...');
});
