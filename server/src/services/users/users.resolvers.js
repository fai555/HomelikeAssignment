
export default function (Profiles) {

  const usersResolvers = {
    Users: {
      profile: (user) => {
        // custom comments
        // 1. There was a bug in this section. I sould not call it a but, as it was intentional I guess ;) 
        // previously written was 
        // return Users.find({ query: { _id: user.owner }}).then(result=>result.data[0]);
        // Users was undefined, it was supposed to be profile
        
        // 2. {query:...} was used inside find() unnecessarily. I removed it
        // 3. then(result=>result.data[0]) was a mistake. it should be then(result=>result[0])

        return Profiles.find({ _id: user.owner }).then(result=>result[0]);
      }
    }
  };

  return usersResolvers;
}
