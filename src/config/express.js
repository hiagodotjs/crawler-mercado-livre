const express = require('express');
const bodyParser = require('body-parser');

const expressConfig = () => {
  const app = new express();
  
  app.use(bodyParser.json({limit: '5mb'}));
  app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

  return app;
};

module.exports = expressConfig;