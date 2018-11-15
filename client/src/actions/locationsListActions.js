import {FETCH_LOCATIONS_LIST} from "./types";
import gql from "graphql-tag";
import client from '../ApolloClient'

export const fetchLocationsList = () => dispatch => {
  client.query({
    query: gql`
    {
      locations(active: true){
        total
        items{
          _id
          title
        
        }
      }
    }
    `
})
.then(locations => dispatch({
  type: FETCH_LOCATIONS_LIST,
  payload: locations.data
}));
};


