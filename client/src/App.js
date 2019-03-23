import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
// import Customers from './components/Customer/customers'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;
global.__SERVER__ = true;


class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <div className="App">
              <Header />

              <Switch>

                <Route path="/Contact" component={Contact} />

                <Route path="/Gallery" component={Gallery} />

                <Route exact path="/" component={Home} />
			  
                <Route path="/" component={Home} />

              </Switch>
            
              <Footer />
            </div>
          </BrowserRouter>
        </Provider>
    )
  }
}

export default App
