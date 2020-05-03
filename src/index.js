const dotenv = require('dotenv');
const configExpress = require('./config/express');

const app = configExpress();
dotenv.config();
const { API_PORT } = process.env;
app.listen(API_PORT, () => {
  console.log(`API is running on port ${API_PORT}`);
});
