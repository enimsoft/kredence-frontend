import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

import Coa from "./pages/downloads/Coa";
import Msds from "./pages/downloads/Msds";
import TrumpCard from "./pages/downloads/Trump";

import Quality from "./pages/quality/quality";

import Honeywell from "./pages/products/honeywell/Honeywell";
import Elementum from "./pages/products/elementum/Elementum";
import Altapure from "./pages/products/altapure/Altapure";
import Cpc from "./pages/products/cpc/Cpc";

import Footer from "./Components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/contactus" component={Contact} />

          <Route exact path="/qualityassurance" component={Quality} />

          <Route exact path="/downloads/coa" component={Coa} />
          <Route exact path="/downloads/msds" component={Msds} />
          <Route exact path="/downloads/trumpcard" component={TrumpCard} />

          <Route path="/products/honeywell" component={Honeywell} />
          <Route path="/products/elementum" component={Elementum} />
          <Route path="/products/altapure" component={Altapure} />
          <Route path="/products/cpc" component={Cpc} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
