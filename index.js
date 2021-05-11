const http = require('http');
const morgan = require('morgan');
const app = require('./app');
const config = require('./utils/config');

app.use(morgan('tiny'));
const server = http.createServer(app);
server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
