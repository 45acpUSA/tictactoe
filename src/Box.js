import React, { Component } from 'react';
import './App.css';

class Box extends Component {

  handleClick = () => {
    const { handleClick, index } = this.props
    handleClick(index)
    this.checkWinner()
  }


  checkWinner = () => {
    const { board } = this.props
    const wins = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6]
    ]
    wins.forEach(win=>{
      const [a, b, c] = win
      if (board[a] && board[a] === board[b] && board[a] === board[c]){
        alert(`${board[a]} is the winner!`)
      } else if (count === 10) {
        alert(`Tie Game!`)
      }
    })
  }


  render(){
    const { value } = this.props
    return (
      <div>
        <div id="mainBox" onClick={this.handleClick}>
          {value}
        </div>
      </div>
    )
  }
}

export default Box;
