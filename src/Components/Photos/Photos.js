import React from "react";
import Image from "./Image";

function Photos({
  allPhotos,
  cartItems,
  toggleFavorite,
  addToCart,
  removeFromCart,
}) {
  function getClass(i) {
    if (i % 5 === 0) {
      return "big";
    } else if (i % 6 === 0) {
      return "wide";
    }
  }

  const imageElements = allPhotos.map((img, i) => (
    <Image
      key={img.id}
      img={img}
      toggleFavorite={toggleFavorite}
      cartItems={cartItems}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      className={getClass(i)}
    />
  ));

  return <main className="photos">{imageElements}</main>;
}

export default Photos;
