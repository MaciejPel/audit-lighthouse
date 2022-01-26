const express = require('express');
const cors = require('cors');
const audit = require('./routes/audit');

const app = express();

app.use(cors());
app.use(express.json());
app.post('/audit', audit.conductAnAudit);
app.get('/report/:uid', audit.report);
app.get('/test', audit.test);

module.exports = app;
