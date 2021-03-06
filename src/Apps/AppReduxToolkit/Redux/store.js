import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './counterReducer';

//Store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
