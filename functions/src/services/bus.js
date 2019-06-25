const { getInstance } = require('../core/firebase');

const COLLECTION_NAME = 'bus';

const db = getInstance().firestore().collection(COLLECTION_NAME);

exports.getBuses = query => db
  .where('tags', 'array-contains', query)
  .get()
  .then(snapshot => {
    const result = [];
    snapshot.forEach(o => result.push(mapResponse(o)));
    return result;
  });


const mapResponse = doc => filterFields({ ...doc.data(), id: doc.id });

const filterFields = fields => ({
  latitude: fields.latitude || 0,
  longitude: fields.longitude || 0,
  line: fields.line || '',
  order: fields.order || '',
  speed: fields.speed || 0,
  direction: fields.direction || 0,
  sense: fields.sense || '',
  timeStamp: fields.timeStamp || ''
});