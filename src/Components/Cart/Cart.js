import React, { useState } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../../Redux/actions";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      dispatch(emptyCart());
      alert("Order placed!");
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </main>
  );
}

export default Cart;
