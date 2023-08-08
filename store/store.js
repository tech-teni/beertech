import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import cartSlice from './slices/cartSlice';

// combine reducers
const reducer = combineReducers({
  cart: cartSlice            
});


// configure for persist store
const persistConfig = {
  timeout: 100, //Set the timeout function to 2 seconds
  key: 'root',
  storage,};



const persistedReducer = persistReducer(persistConfig, reducer);


const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;