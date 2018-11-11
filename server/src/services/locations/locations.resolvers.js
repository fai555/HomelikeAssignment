
export default function (Countries) {

  const locationsResolvers = {
    Locations: {
      
      country: (location) => {

        Countries.find().then(country=>console.log(country))
        return Countries.find({ query: { _id: location._id }}).then(result=>result[0]);
      },
      
    }
  };

  return locationsResolvers;
}
