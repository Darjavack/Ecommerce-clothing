import CartActionTypes from "./cart.types";
import { addItemToCart, decreaseItemQuantity } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.DECREASE_CART_ITEM:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload),

        //!I imported this code down here from cart.utils, as a function!
        //? cartItems: state.cartItems.map((cartItem) => {
        //?  return cartItem.id === action.payload.id
        //?     ? { ...cartItem, quantity: cartItem.quantity - 1 }
        //?     : cartItem;
        //? }),
      };
    default:
      return state;
  }
};

export default cartReducer;
