import { 
  visitedReducer, 
  categoriesReducer,
  countriesReducer } from './film';

import { combineReducers } from 'redux';

const allReducer = combineReducers({
  visited: visitedReducer,
  categories: categoriesReducer,
  countries: countriesReducer
})

export default allReducer