import {FETCH_APARTMENT_FILTERED_BY_LOCATION} from './../actions/types';

const initialState = {
  apartmentsByLocation: {}
};


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_APARTMENT_FILTERED_BY_LOCATION:
            return {
                ...state,
                apartmentsByLocation: action.payload
            };
        default:
            return state;
    }
}
