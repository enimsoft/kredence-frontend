import React from 'react';
import './App.css';
import Header from './components/header/Header'
import HomeCarousel from './components/homecarousel/homecarousel';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import { BrowserRouter, Switch,Route} from "react-router-dom";
import Coa from './pages/downloads/Coa'
import Msds from './pages/downloads/Msds'
import TrumpCard from './pages/downloads/Trump'
import Honeywell from './pages/products/honeywell/Honeywell';
import Elementum from './pages/products/elementum/Elementum';
import Altapure from './pages/products/altapure/Altapure';
import Cpc from './pages/products/cpc/Cpc';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route exact path="/">
          <Home />
        </Route>

          <Route path='/contactus'>
            <Contact/>
          </Route>
          <Route path='/downloads/coa'>
              <Coa/>
          </Route>
          <Route path='/downloads/msds'>
              <Msds/>
          </Route>
          <Route path='/downloads/trumpcard'>
              <TrumpCard/>
          </Route>

          <Route path='/products/honeywell'>
              <Honeywell/>
          </Route>

          <Route path='/products/elementum'>
              <Elementum/>
          </Route>
          <Route path='/products/altapure'>
              <Altapure />
          </Route>

          <Route path='/products/cpc'>
              <Cpc />
          </Route>
        </Switch>
        
        </BrowserRouter>

        <Footer />
    </div>
      

  );
}

export default App;
