export const setAllPhotos = (data) => ({
  type: "SET_ALL_PHOTOS",
  payload: data,
});

export const toggleFavorite = (id) => ({
  type: "TOGGLE_FAVORITE",
  payload: id,
});

export const addToCart = (newItem) => ({
  type: "ADD_TO_CART",
  payload: newItem,
});

export const removeFromCart = (id) => ({
  type: "REMOVE_FROM_CART",
  payload: id,
});

export const emptyCart = () => ({
  type: "EMPTY_CART",
});
