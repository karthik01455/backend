const express = require('express');
var cors = require('cors');
const contentTypeRouter = require('./src/routers/contentType');
const collectionRouter = require('./src/routers/collections');
const app = express();
const PORT = 8001;
app.use(cors());
app.use(express.json());
app.use('/contentTypes', contentTypeRouter);
app.use('/collections', collectionRouter);
app.listen(PORT, () => {
  console.log(`Application Started in PORT: ${PORT}`);   
});