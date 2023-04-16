import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';
import { searchInputReducer } from './searchInputReducer';
import { searchResultsReducer } from './searchResultsReducer';

const rootReducers = combineReducers({
  searchInputReducer,
  searchResultsReducer,
});

export const store = createStore(rootReducers);
