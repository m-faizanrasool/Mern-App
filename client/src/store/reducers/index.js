import {combineReducers} from 'redux';
import itemReducer from './customer';
// import {usersReducer} from './reducer-users'

export default combineReducers({
  customers: itemReducer
})
