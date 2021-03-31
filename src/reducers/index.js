import { 
  filmStoredReducer, 
  categoriesReducer,
  countriesReducer,
  filmsStoredReducer } from './film';

import { combineReducers } from 'redux';

const allReducer = combineReducers({
  filmStored: filmStoredReducer,
  categories: categoriesReducer,
  countries: countriesReducer,
  filmsStored: filmsStoredReducer
})

export default allReducer