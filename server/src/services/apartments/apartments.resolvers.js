
export default function (Users, Locations) {

  const apartmentsResolvers = {
    Apartments: {
      owner: (apartment) => {
        return Users.find({ query: { _id: apartment.owner }}).then(result=>result[0]);
      },
      location: (apartment) => {
        console.log("@@ "+apartment.location+" @@@")
        Locations.find().then(result=>console.log(result[0]))
        return Locations.find({ query: { _id: apartment.location }}).then(result=>{
          console.log("##")
          console.log("result"+result)
          console.log("##")
          result[0]
        
        });
      },
      details: (apartment) => {
        return apartment.detail;
      }

    }
  };

  return apartmentsResolvers;
}
