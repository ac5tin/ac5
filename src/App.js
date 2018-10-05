import React, { Component } from 'react';

// load css
import 'bulma/css/bulma.css';
import './public/css/App.css';

// import components
import Navbar from './components/nav/navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
