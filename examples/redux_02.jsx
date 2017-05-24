import { createStore } from 'redux';

// Action types
const amountTypes = { 'SAW_CATS': 'SAW_CATS' };

// Reducer
function amountReducer(state, action) {
  ...
}

// Action creator
function sawCats(amount) {
  ...
}

// Set up a store and listen to it
const store = createStore(amountReducer);

store.subscribe(state => console.log(store.getState()));

store.dispatch(sawCats(1));
