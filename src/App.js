import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from './components/About/About';
import Promotions from './components/Promotions/Promotions';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <Router>
     <Header />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/promotions">
            <Promotions />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
