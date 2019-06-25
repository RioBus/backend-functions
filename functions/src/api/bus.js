const { getBuses } = require('../services');

module.exports = async (req, res) => {
  try {
    const operations = req.params.query.split(',').filter(Boolean).map(getBuses);
    const buses = await Promise.all(operations);
    res.status(200).send(buses);
  } catch (e) {
    res.status(500).send(e.stack);
  }
};
