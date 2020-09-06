import ownedReducer from './owned';
// import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    owned: ownedReducer
});

export default allReducers;