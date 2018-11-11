export default function(Query, Service, GetServiceName, FindServiceName) {
  Object.assign(Query, {
    [`${GetServiceName}`]: (root, args, context) => {
      return Service.find(Object.assign({}, context, { query: args })).then(result => result[0]);
    },
  });
  Object.assign(Query, {
    [`${FindServiceName}`]: (root, args, context) => {
      // custom comment
      // initially I tried to do the limit, skip thing by object destructuring
      // destructring the args to {limit, skip, ...rest} and putting rest as { query : rest} would make things a lot more cleaner
      // but for some reason the ... operator is not working. I guess it must be dut to ES6 configuration issue. 
      // I left it aside and provided an alternative way to accomplish the same thing. 

      var limit = args.limit;
      var skip = args.skip;

      delete args.limit;
      delete args.skip;

      return Service.find(Object.assign({}, context, { query: args })).then(result => {

        result = result.slice(skip, result.length)
        result = result.slice(0, limit)

        return { total: result.length, items: result };

      });
    },
  });
}
