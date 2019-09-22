import React from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import logo from './img/logo.svg';
import './css/App.css';

/*
  <img src={logo} />
  <a href="https://reactjs.org">Learn React</a>
*/

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
