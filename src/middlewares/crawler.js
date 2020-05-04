const { errorThrower, sendError } = require('../utils/errorHandler');

const onSearchProducts = (req, res, next) => {
  try {
    const { search, limit } = req.body;

    if (!search) errorThrower("'search' cannot be null or undefined", 400);
    if (!limit || typeof limit !== 'number' || !Number.isInteger(limit)) {
      errorThrower("'limit' must be an integer greater than 0", 400);
    }

    return next();
  } catch (error) {
    return sendError(error, res);
  }
};

module.exports = {
  onSearchProducts,
};
