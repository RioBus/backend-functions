import * as admin from 'firebase-admin';

let client: admin.app.App;

export function getInstance(): admin.app.App {
    if (!client) client = admin.initializeApp();
    return client;
}
