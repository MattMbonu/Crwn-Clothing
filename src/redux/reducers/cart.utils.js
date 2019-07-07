export const addCartItem = (cartItems, newItem) => {
  const existingCartItem = cartItems.find(item => item.id === newItem.id);
  if (existingCartItem) {
    return cartItems.map(item => {
      if (item.id === newItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};

export const removeSingleItem = (cartItems, Item) => {
  const existingCartItem = cartItems.find(item => item.id === Item.id);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== existingCartItem.id);
  } else {
    return cartItems.map(item => {
      if (item.id === existingCartItem.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
  }
};
