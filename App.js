import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'cocktail-app';

//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      {}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
    
        </Route>
      </Switch>
    </Router>
  );
}