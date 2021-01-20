const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const postsRoute = require('./routers/posts');
//const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
//app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/posts', postsRoute);
app.get('/', (req, res) => {
  res.send('Hello I am at home');
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  
  { useUnifiedTopology: true },
  () => {
    console.log('connect to DB');
  }
);

app.listen(3000);
