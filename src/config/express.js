const Express = require('express');
const bodyParser = require('body-parser');

const expressConfig = () => {
  const app = new Express();

  app.use(bodyParser.json({ limit: '5mb' }));
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

  return app;
};

module.exports = expressConfig;
