
export default function (Users, Locations) {

  const apartmentsResolvers = {
    Apartments: {
      owner: (apartment) => {
        return Users.find({ query: { _id: apartment.owner }}).then(result=>result[0]);
      },
      location: (apartment) => {
        // console.log("@@ "+apartment.location+" @@@")

        // console.log("1111")
        // Locations.find({ _id: apartment.location }).then(result=>console.log("1111",result,"1111"))
        // console.log("1111")
        
        return Locations.find({ _id: apartment.location }).then(result=>{
          // console.log("##")
          // console.log("result"+result)
          // console.log("##")
          return result[0]
        
        });
      },
      details: (apartment) => {
        return apartment.detail;
      }

    }
  };

  return apartmentsResolvers;
}
