const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

const WIKI_URL = 'https://github.com/RioBus/proxy/wiki/REST-API';

// export * from './crawler';

const api = express();

api.use(compression());
api.use(helmet());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

api.get('/', (req, res) => res.redirect(WIKI_URL));

api.get('/search/:query', (req, res) => {
    res.status(200).json([]);
});

api.get('/itinerary/:query', (req, res) => {
    res.status(200).json([]);
});

exports.v3 = functions.https.onRequest(api);
