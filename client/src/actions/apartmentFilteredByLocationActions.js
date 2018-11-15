import {FETCH_APARTMENT_FILTERED_BY_LOCATION} from "./types";
import gql from "graphql-tag";
import client from '../ApolloClient'

export const fetchApartmentFilteredByLocation = (location) => dispatch => {
  client.query({
    query: gql`
        {
          apartments(location: "${location}") {
            total
            items{
              
                _id
                owner {
                  _id
                  email
                  profile{
                    firstName
                    lastName
                    role
                  }
                } 
                title
                location {
                  title
                }
                size
                price
                images
                amenities
                details {
                  rooms
                  bedrooms
                  floor
                  bathrooms
                } 
                services 
              
            }
          }
        }

        `
})
.then(apartments => 
  {
    console.log(apartments.data.apartments.items)
    return dispatch({
      type: FETCH_APARTMENT_FILTERED_BY_LOCATION,
      payload: apartments.data.apartments.items
    })

  }


);
};


