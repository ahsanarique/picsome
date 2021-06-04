import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart.js";
import Photos from "./Components/Photos/Photos";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
