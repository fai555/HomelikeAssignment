export default [
  `
  type UsersWithPagination {
    total: Int
    items: [Users]
  }
  
  type Users {
    _id: String!
    email: String
    profile: Profile
  }

`,
];
