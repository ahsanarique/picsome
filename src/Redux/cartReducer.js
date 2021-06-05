const cartReducer = (cartItems = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...cartItems, action.payload];

    case "REMOVE_FROM_CART":
      const filteredArr = cartItems.filter(
        (photo) => photo.id !== action.payload
      );
      return filteredArr;

    case "EMPTY_CART":
      return [];

    default:
      return cartItems;
  }
};

export default cartReducer;
