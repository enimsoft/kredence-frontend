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
          <Route path='/coa'>
              <Coa/>
          </Route>
          <Route path='/msds'>
              <Msds/>
          </Route>
          <Route path='/trumpcard'>
              <TrumpCard/>
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
      

  );
}

export default App;
