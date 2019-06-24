import * as functions from 'firebase-functions';
import api from './api';

export * from './crawler';

export const v3 = functions.https.onRequest(api);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
