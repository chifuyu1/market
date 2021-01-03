import { combineReducers } from 'redux';
import cartReducer from './cart';
import couponReducer from './coupon';
import favoritesReducer from './favorites';
import productReducer from './product';
import userReducer from './user';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  coupon: couponReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
});

export default rootReducer;
// export type RootState = ReturnType<typeof rootReducer>
