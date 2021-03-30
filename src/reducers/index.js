import { 
  visitedReducer, 
  categoriesReducer,
  countriesReducer,
  filmsReducer } from './film';

import { combineReducers } from 'redux';

const allReducer = combineReducers({
  visited: visitedReducer,
  categories: categoriesReducer,
  countries: countriesReducer,
  films: filmsReducer
})

export default allReducer