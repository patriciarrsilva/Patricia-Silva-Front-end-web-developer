import React, { Component } from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './css/App.css';

/*
  <a href="https://reactjs.org">Learn React</a>
*/

class App extends Component {
  state = {
    visible: false
  }

  handleMenuClick = (e) => {
    this.setState({ visible: !this.state.visible })
    e.stopPropagation();
  }

  handleOutsideClick = (e) => {
    this.setState({ visible: false })
    e.stopPropagation();
  }

  render() {
    const { visible } = this.state;

    return (
      <div className="App" >
        <Nav visible={visible} handleMenuClick={this.handleMenuClick} />
        <Main handleOutsideClick={this.handleOutsideClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
