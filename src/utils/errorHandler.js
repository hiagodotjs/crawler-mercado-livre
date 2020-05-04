const errorThrower = (message, status) => {
  // eslint-disable-next-line no-throw-literal
  throw { message, status };
};

const sendError = (error, res) => {
  const { status, message } = error;
  return res.status(status || 500).send({
    error: message,
  });
};

module.exports = {
  errorThrower,
  sendError,
};
