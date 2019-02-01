import express = require('express');
import { hello } from './src/controllers/status';

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Hi')
});

export default app;