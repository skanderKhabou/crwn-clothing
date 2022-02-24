import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

export const HatsPage = () => (
  <div>
    <h1> Hats Page</h1>
  </div>
);
export const JacketsPage = () => (
  <div>
    <h1> Jackets Page</h1>
  </div>
);
export const SneakersPage = () => (
  <div>
    <h1> Sneakers Page</h1>
  </div>
);
export const WomensPage = () => (
  <div>
    <h1> Womens Page</h1>
  </div>
);
export const MensPage = () => (
  <div>
    <h1> Mens Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
        <Route exact path="/shop/jackets" component={JacketsPage} />
        <Route exact path="/shop/sneakers" component={SneakersPage} />
        <Route exact path="/shop/womens" component={WomensPage} />
        <Route exact path="/shop/mens" component={MensPage} />
      </Switch>
    </div>
  );
}

export default App;
