import { merge } from 'lodash';
import addQueryResolvers from './graphql.resolvers.queries.js';

import usersResolvers from '../users/users.resolvers.js';
import apartmentsResolvers from '../apartments/apartments.resolvers.js';
// custom comments
// importing location resolvers
import locationsResolvers from '../locations/locations.resolvers.js'; 

export default function () {
  const app = this;

  const Users = app.service('users');
  const Profiles = app.service('profiles');
  const Apartments = app.service('apartments');
  const Locations = app.service('locations');
  // custom comments
  // declared Countries service to pass as a parameter in locationsResolvers
  const Countries = app.service('countries');

  // Apartments.find().then(data=>console.log(data));

  const rootResolvers = {
    Query: {

    },
  }

  addQueryResolvers(rootResolvers.Query, Users, 'user', 'users');
  addQueryResolvers(rootResolvers.Query, Apartments, 'apartment', 'apartments');
  addQueryResolvers(rootResolvers.Query, Locations, 'location', 'locations');
  // addQueryResolvers(rootResolvers.Query, Countries, 'country', 'countries');

  return merge(
    rootResolvers,
    apartmentsResolvers(Users, Locations),
    usersResolvers(Profiles),
    // custom comments
    // added locationsResolvers
    locationsResolvers(Countries),
  );
}
