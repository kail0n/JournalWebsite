const server = require('./server');
const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Express running from port ${port}`));