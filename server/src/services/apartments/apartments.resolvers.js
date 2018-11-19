
export default function (Users, Locations) {

  const apartmentsResolvers = {
    Apartments: {
      owner: (apartment) => {
        return Users.find({ query: { _id: apartment.owner }}).then(result=>result[0]);
      },
      location: (apartment) => {


      // custom comments
      // the commented out part was an unsuccessful attempt to implement search 

      //   const where = apartment.location
      //   ? {
      //       OR: [
      //         { _id: apartment.location },
      //         { title_contains: apartment.location }
      //       ],
      //     }
      //   : {}
    
      // // return context.db.query.links({ where }, info)

      // return Locations.find({where}).then(result=>{
      //     return result[0]
      //   });

      
        return Locations.find({ _id: apartment.location }).then(result=>{
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
