// import thunk from 'redux-thunk'
// import { createStore, applyMiddleware, compose } from 'redux'

// import { AppState } from '../misc/type'

import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk";
// import productReducer from './reducers/productReducer';
import rootReducer from "./reducer/product";

//const rootReducer = combineReducers({
// products: createRootReducer,
// });

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
