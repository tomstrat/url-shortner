const express = require('express');
const bodyParser = require('body-parser');
const { DatabaseAPI } = require('./database/database');
const dbMeta = require('./database/dbSchema');

const DB_PATH = './database/sqlite.db';

const DB = new DatabaseAPI(DB_PATH, dbMeta.dbSchema);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));

require('./routes/submission')(app, DB);
require('./routes/shortLink')(app, DB);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
