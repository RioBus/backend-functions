const { getItinerary } = require('../services');

module.exports = async (req, res) => {
  try {
    const line = req.params.query.trim();
    const itinerary = await getItinerary(line);
    res.status(200).send(itinerary);
  } catch (e) {
    res.status(500).send(e.stack);
  }
};
