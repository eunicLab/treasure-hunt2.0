import React from 'react';
import './App.css';
import Square from './Square'

 


class Board extends React.Component{


   renderSquare(i) {
    
    return <Square 
            onClick={()=>this.props.onClick(i)}
            className={this.props.cellBackground[i]}

    />;
  }

  render() {

    return (
      <div>
      <div className="table">
        <div className="board-row1">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="board-row2">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="board-row3">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
      </div>
      <div class="endgame">text</div>
      </div>

    );
  }
}

export default Board