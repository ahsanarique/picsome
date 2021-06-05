import React from "react";
import useHover from "../../Hooks/useHover";

function CartItem({ item, removeFromCart }) {
  const [hovered, ref] = useHover();

  const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
      ></i>

      <img src={item.url} alt="cart images" width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
