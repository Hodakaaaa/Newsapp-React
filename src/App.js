// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  // Define the variable as a class property
 a = "Mandhoj";
  render() {
    return (
      <div>
        Hello ! {this.a} Welcome to my first class based component app.
      </div>
    )
  }
}
