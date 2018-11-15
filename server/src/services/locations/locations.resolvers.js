
export default function (Countries) {

  const locationsResolvers = {
    Locations: {
      
      country: (location) => {

        console.log(location)
        // Countries.find().then(country=>console.log(country))
        return Countries.find({ _id: location._id }).then(result=>result[0]);
      },
      
    }
  };

  return locationsResolvers;
}
