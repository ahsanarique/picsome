import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import fakeData from "./Fakedata/fakedata";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart.js";
import Photos from "./Components/Photos/Photos";

function App() {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setAllPhotos(fakeData);
  }, []);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  }

  function addToCart(newItem) {
    setCartItems((prevItems) => [...prevItems, newItem]);
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <div>
      <Header cartItems={cartItems} />
      <Switch>
        <Route exact path="/">
          <Photos
            allPhotos={allPhotos}
            cartItems={cartItems}
            setAllPhotos={setAllPhotos}
            toggleFavorite={toggleFavorite}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Route>

        <Route path="/cart">
          <Cart
            cartItems={cartItems}
            emptyCart={emptyCart}
            removeFromCart={removeFromCart}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
