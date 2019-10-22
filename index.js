require('dotenv').config();
const express = require('express');
const routes = require('./app/routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);