import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import SpecialOffers from "./components/SpecialOffers";
import Location from "./components/Location";
import ContactUs from "./components/ContactUs";

import "./css/main.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch className="switch">
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/specialoffers" component={SpecialOffers} />
            <Route exact path="/locations" component={Location} />
            <Route exact path="/contactus" component={ContactUs} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
