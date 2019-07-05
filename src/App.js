import React, { Component } from 'react';
import './App.css';
import User from './User.js'

class App extends Component {


  render(){

    return (
      <div>
        <h1>Tic-Tac-Toe</h1>
        <br />
        <br />
        <User />
      </div>
    )
  }
}

export default App;
