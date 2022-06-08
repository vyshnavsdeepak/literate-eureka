const express = require('express');
const { startCron, getCronList } = require('./cron');

const app = express();

let testNo = 0;

app.get('/create', (req, res) => {
  startCron(`test${++testNo}`)
  res.send('DOne')
});

app.get('/list', (req, res) => {
  res.send(getCronList());
});

app.listen(3333);