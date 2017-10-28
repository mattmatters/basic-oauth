const express = require('express');
const path = require('path');
const google = require('googleapis');
const exphbs = require('express-handlebars');
const app = express();
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  'CLIENT_ID',
  'CLIENT_SECRET',
  'REDIRECT_URL'
);

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'online',
  scope: [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/calendar'
  ],
  state: 'puppy'
});

let accessTokens = [];

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => (
  res.render('home', {
    authUrl: authUrl,
    test: 'poop'
  })
));

app.get('/oauthcallback', (req, res) => (
  console.log(req)
));

app.listen(3000, () => (
  console.log('The puppies are listening on port 3000!')
));


// Wrapper around making the auth url
const makeAuthUrl = () => {
};
