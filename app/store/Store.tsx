
// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Slice.jsx';

const store = configureStore({
  reducer: {
    auth: loginReducer,  // The 'auth' slice of state is managed by the loginReducer
  },
});

export default store;