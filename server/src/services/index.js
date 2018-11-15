const profiles = require('./profiles/profiles.service.js');
const users = require('./users/users.service.js');
const apartments = require('./apartments/apartments.service.js');
const locations = require('./locations/locations.service.js');
const graphql = require('./graphql/graphql.service.js');

// importing countries for server tasks step 1
const countries = require('./countries/countries.service.js');

module.exports = function () {
  const app = this;
  app.configure(profiles);
  app.configure(users);
  app.configure(apartments);
  app.configure(locations);

  
  // importing countries for server tasks step 1
  app.configure(countries);
  
  app.configure(graphql);
};
