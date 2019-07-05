import React, { Component } from 'react';
import './App.css';
import Box from './Box.js'

class User extends Component {
  constructor(props){
    super(props)
    this.state = {
        board: ["", "","", "", "", "", "", "", ""],
        count: 1
      }
  }

  handleClick = (boxIndex) => {
    const { board, count } = this.state
    let newCount = count + 1
    if (count % 2 !== 0){
      board[boxIndex] = "X"
      this.setState({count: newCount})
    } else {
      board[boxIndex] = "O"
      this.setState({count: newCount})
    }
    this.setState({ board })
  }

  // handleReset = () => {
  //
  // }

  render(){
    const { board } = this.state
    const gameBoard = board.map((value, index) => {
      return (
        <Box
          value={value}
          index={index}
          handleClick={this.handleClick}
          board={board}
        />
      )
    })
    return (
      <div>
        <div id="gameBoard">
          {gameBoard}
        </div>
      </div>
    )
  }
}

export default User;
