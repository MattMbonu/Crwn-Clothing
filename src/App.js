import React from "react";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import "./App.css";
import { Route, Switch } from "react-router-dom";

const Hats = () => <div>HATS PAGE</div>;
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
