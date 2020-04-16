export const addItem = (cartItems, cartItemToAdd) => {
  const exCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (exCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, item) => {
  if (item.quantity === 1) {
    return cartItems.filter(({ id }) => id !== item.id);
  }
  return cartItems.map(cartItem =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearItemFromCart = (cartItems, idItem) => {
  // const itemIndex = cartItems.findIndex(item => item.id == idItem);
  // return [...cartItems.splice(0, itemIndex), ...cartItems.splice(itemIndex + 1)];
  return cartItems.filter(item => item.id !== idItem);
};

// export const updateOrder = (cartItems, itemToAdd, quantity) => {
//   const existItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

//   if (!existItem) {
//     return [...cartItems, { ...itemToAdd, quantity: 1 }];
//   }

//   const newItems = cartItems.map(cartItem =>
//     cartItem.id === itemToAdd.id
//       ? { ...cartItem, quantity: cartItem.quantity + quantity }
//       : cartItem
//   );
//   const item = newItems.find(({ id }) => id === itemToAdd.id);

//   if (item.quantity === 0) {
//     return cartItems.filter(({ id }) => id !== itemToAdd.id);
//   }

//   return newItems;
// };
