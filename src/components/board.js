import React, { Component } from 'react'
import Square from './square'

class Board extends Component {

  // generates an array of 18 rows, each containing 10 GridSquares.
  makeGrid() {
    let grid = []
    for (let row = 0; row < 18; row ++) {
      grid.push([])
      for (let col = 0; col < 10; col ++) {
        grid[row].push(<Square key={`${col}${row}`} color="1" />)
      }
    }
    return grid
  }

  // The components generated in makeGrid are rendered in div.grid-board
  render () {
    return (
      <div className='board'>
        {this.makeGrid()}
      </div>
    )
  }
}

export default Board;
