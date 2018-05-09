const express = require('express');
const path = require('path');
const google = require('googleapis');
const process = require('process');
const exphbs = require('express-handlebars');
const app = express();
const OAuth2 = google.auth.OAuth2;

// Initialize the client, it will do all the OAauth2 requests for us
const oauth2Client = new OAuth2(
  'CLIENT_ID',
  'CLIENT_SECRET',
  'REDIRECT_URL'
);

// We direct useres to authenticate through this url
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'online',
  scope: [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/calendar'
  ],
  state: 'puppy'
});

// Globals are gross, but this is a 48 line example app
let accessTokens = [];

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => (
  res.render('home', {
    authUrl: authUrl,
    accessTokens: accessTokens.length ? accessTokens : false
  })
));

app.get('/oauthcallback', (req, res) => (
  oauth2Client.getToken(req.query.code, (err, tokens) => {
    if (!err) {
      accessTokens = [ tokens.access_token, ...accessTokens];
    }
    res.location('/');

    // Render the page again, we keep the query in the header so
    // people can see the entire auth code url
    return  res.render('home', {
      authUrl: authUrl,
      accessTokens: accessTokens.length ? accessTokens : false
    });
  })
));

const listener = app.listen(process.env.PORT || 3000, () => (
  console.log('The puppies are listening on port 3000!')
));

module.exports = listener;
