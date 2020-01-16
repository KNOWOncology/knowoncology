// https://stormpath.com/blog/talking-to-oauth2-services-with-nodejs
// https://mendeley-show-me-access-tokens.herokuapp.com/
// https://github.com/Mendeley/mendeley-javascript-sdk

var sdk = require('@mendeley/api');
var api = sdk({
  authFlow: sdk.Auth.authCodeFlow({
    apiAuthenticateUrl: '/login',
    refreshAccessTokenUrl: '/refresh-token'
  })
});



const { agents } = require('../../lib/helpers/data-helpers');
 
//MENDELEY_TEMP_TOKEN

agents.none
  .get('https://api.mendeley.com/oauth/token')
  url: ,
  method: 'POST',
  auth: {
    user: 'xxx',
    pass: 'yyy'
  },
  form: {
    'grant_type': 'client_credentials'
  }
}, function(err, res) {
  var json = JSON.parse(res.body);
  console.log("Access Token:", json.access_token);
});