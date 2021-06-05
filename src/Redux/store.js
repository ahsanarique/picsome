import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  toggleFavorite,
  addToCart,
  removeFromCart,
  emptyCart,
} from "./actions";
import thunk from "redux-thunk";
import allPhotosReducer from "./allPhotosReducer";
import cartReducer from "./cartReducer";

const reducer = combineReducers({
  allPhotos: allPhotosReducer,
  cart: cartReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(toggleFavorite);
store.subscribe(addToCart);
store.subscribe(removeFromCart);
store.subscribe(emptyCart);

export default store;
