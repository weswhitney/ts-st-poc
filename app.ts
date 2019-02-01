import express = require('express');
import statusController = require('./src/controllers/status');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Hi')
});

app.get('/bye', (req, res) => {
    res.send('Bye');
});

app.get('/hello', statusController.hello);

export default app;