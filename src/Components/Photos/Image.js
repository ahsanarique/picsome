import React from "react";
import useHover from "../../Hooks/useHover";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite, addToCart, removeFromCart } from "../../Redux/actions";

function Image({ className, img }) {
  const [hovered, ref] = useHover();
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => dispatch(toggleFavorite(img.id))}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => dispatch(toggleFavorite(img.id))}
        ></i>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => dispatch(removeFromCart(img.id))}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => dispatch(addToCart(img))}
        ></i>
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} alt="images" className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

export default Image;
