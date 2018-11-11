const createService = require('feathers-mongodb');
const hooks = require('./countries.hooks');

module.exports = function() {
  const app = this;
  const mongoClient = app.get('mongoClient');
  // custom comments
  // commented out the line below and used createService({}) directly
  // const apartmentService = createService({});

  // adding new endpoint /countries server task step 1 
  app.use('/countries', createService({}));
  
  const service = app.service('countries');

  mongoClient.then(db => {
    service.Model = db.collection('countries');
  });

  service.hooks(hooks);
};