import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* Render ra trang Checkout */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/* Render ra trang Login */}
          <Route path="/login">
            <Login />
          </Route>

          {/* Render ra trang chu */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
