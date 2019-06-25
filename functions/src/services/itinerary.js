const { getInstance } = require('../core/firebase');

const COLLECTION_NAME = 'itinerary';

const db = getInstance().firestore().collection(COLLECTION_NAME);

exports.getItinerary = query => db
  .where('tags', 'array-contains', query)
  .get()
  .then(snapshot => {
    const result = [];
    snapshot.forEach(o => result.push(mapResponse(o)));
    return result[0] || null;
  });


const mapResponse = doc => filterFields({ ...doc.data(), id: doc.id });

const filterFields = fields => ({
  line: fields.line || 'indefinindo',
  description: fields.description || 'desconhecido',
  agency: fields.agency || '',
  tags: fields.tags || [],
  spots: fields.spots || []
});