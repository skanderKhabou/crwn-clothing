import { createSelector } from "reselect";

// two type of selector that we can write : input selector doesn t use createselector and out put selector use input selector and create selector

// function get the state and return a slice of it one layer deep usually
const selectCart = (state) => state.cart;

// createselector takes two argument ,  a collection and a function that return the value we want out of the selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedTotal, cartItem) =>
      accumulatedTotal + cartItem.price * cartItem.quantity,
    0
  )
);
