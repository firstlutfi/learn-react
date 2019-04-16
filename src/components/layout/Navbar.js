import React, { Component } from 'react';
import logo from './../../logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-title">Todo List</div>
        <div className="navbar-subtitle">Learn React</div>
        <div className="navbar-logo"><img src={logo} alt="logo"></img></div>
      </div>
    );
  }
}

export default Navbar;
