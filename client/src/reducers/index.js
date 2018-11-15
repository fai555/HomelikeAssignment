import {combineReducers} from 'redux';
import apartmentsListReducer from './apartmentsListReducer';
import apartmentReducer from './apartmentReducer';
import apartmentFilteredByLocationReducer from './apartmentFilteredByLocationReducer'

import locationsListReducer from './locationsListReducer';

export default combineReducers({
    apartmentsList: apartmentsListReducer,
    apartmentItem: apartmentReducer,
    apartmentFilteredByLocation: apartmentFilteredByLocationReducer,
    locationsList: locationsListReducer,
})
