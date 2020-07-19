const express = require ('express');
const form = require ('./views/form');
const submit = require ('./views/submit');
const layout = require ('./views/layout');
const bodyParser = require ('body-parser');
require ('./mongo/database');

const app = express ();

app.use (bodyParser.urlencoded ({extended: false}));
app.use (express.static ('./public'));

const PORT = process.env.PORT || 3000;
let linkID = 1; // || database last record id

app.get ('/', (req, res) => {
  res.send (layout (form));
});

app.post ('/submit', (req, res) => {
  const url = req.body.url;
  if (!url) {
    res.send ('no url submitted');
  } else if (!url.match (/^https?:\/\//)) {
    res.send ('incorrect url format');
  }

  //if yes create short link
  //check against the database
  //send to database with the url
  //show success page with the new link
  res.send (layout (submit (linkID)));
});

app.listen (PORT);
