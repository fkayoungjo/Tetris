import React, { Component } from 'react';
import Square from './square'

class NextBlock extends Component {

  makeGrid() {
   const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]
   // Map the block to the grid
   return box.map((rowArray, row) => {
     return rowArray.map((square, col) => {
       return <Square key={`${row}${col}`} color={0} />
     })})
   }

  render () {
    return (
      <div className="next">
        {this.makeGrid()}
      </div>
    )
  }
}

export default NextBlock;
