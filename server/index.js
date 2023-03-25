const express = require('express');
const bodyParser = require('body-parser');
const InitiateMongoServer = require('./config/db');
const user = require('./router/user');
const cors = require('cors');
const dmuser = require('./router/dmuser');
const hospuser = require('./router/hospuser');
const trafficuser = require('./router/trafficuser');
const transportuser = require('./router/transportuser');

InitiateMongoServer();

const app = express();
app.use(cors());

// middleware
app.use(bodyParser.json());

// PORT
const PORT = 4000;

app.get('/', (req, res) => {
  res.json({ message: 'API Working' });
});

// router

app.use('/user', user);

app.use('/dmuser', dmuser);

app.use('/hospuser', hospuser);

app.use('/trafficuser', trafficuser);

app.use('/transportuser', transportuser);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
