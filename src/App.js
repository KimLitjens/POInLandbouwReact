import React from "react"
import { Switch, Route } from "react-router-dom"
import "./styles/style.css"

import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import ArEnRa from "./pages/ArtikelenEnRapporten"
import Contact from "./pages/Contact"
import MariaLitjens from "./pages/MariaLitjens"
import PO from "./pages/PO"
import POInNederland from "./pages/POInNederland"
import StudieEnWerk from "./pages/StudieEnWerk"
import LeftSide from "./components/LeftSide"
import RightSide from "./components/RichtSide"
import ReactGA from 'react-ga'

import './App.css';

ReactGA.initialize('G-GW1ZZ1BCD3');
ReactGA.pageview(window.location.pathname + window.location.search);



function App() {

  return (
    < div class="row d-flex justify-content-between h-100 w-100" >
      {/* leftside */}
      <div div div id="leftSide" class="col-1 d-none d-lg-block" > <LeftSide /></div >
      {/* middelpart */}
      <div div div id="middelPart" class="col h-100" >
        <div><Header /></div>
        {/* mainpart */}
        <div ><Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/po">
            <PO />
          </Route>
          <Route path="/marialitjens">
            <MariaLitjens />
          </Route>
          <Route path="/studieenwerk">
            <StudieEnWerk />
          </Route>
          <Route path="/Artikelenenrapporten">
            <ArEnRa />
          </Route>
          <Route path="/poinnederland">
            <POInNederland />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        </div>
        {/* footer */}
        <Footer />
      </div >
      {/* rightside */}
      <div div div id="rightSide" class="col-1 d-none d-lg-block" > <rightSide /></div >
    </div >

  );
}

export default App;









