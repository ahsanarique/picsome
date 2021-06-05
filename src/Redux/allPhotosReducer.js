const allPhotosReducer = (allPhotos = [], action) => {
  switch (action.type) {
    case "SET_ALL_PHOTOS":
      return action.payload;

    case "TOGGLE_FAVORITE":
      const updatedArr = allPhotos.map((photo) => {
        if (photo.id === action.payload) {
          return { ...photo, isFavorite: !photo.isFavorite };
        }
        return photo;
      });
      return updatedArr;

    default:
      return allPhotos;
  }
};

export default allPhotosReducer;
