import {GET_ITEMS} from './constants';

export const getItems = () => dispatch => {
  return fetch('/api/customers')
    .then(res => res.json())
    .then(items => dispatch({type: GET_ITEMS, payload: items}))
}
