
export default function (Users, Locations) {

  const apartmentsResolvers = {
    Apartments: {
      owner: (apartment) => {
        return Users.find({ query: { _id: apartment.owner }}).then(result=>result[0]);
      },
      location: (apartment) => {




        const where = apartment.location
        ? {
            OR: [
              { _id: apartment.location },
              { title_contains: apartment.location }
            ],
          }
        : {}
    
      // return context.db.query.links({ where }, info)

      return Locations.find({where}).then(result=>{
          return result[0]
        });







        // console.log(location)
        // return Locations.find({
        //   "$or": [
        //     { _id: apartment.location }
        //     , {
        //       title_contains: apartment.location
        //     }]
        // }

          
        //   // { _id: apartment.location }
        
        // ).then(result=>{
        //   return result[0]
        // });
      },
      details: (apartment) => {
        return apartment.detail;
      }
    }
  };

  return apartmentsResolvers;
}
