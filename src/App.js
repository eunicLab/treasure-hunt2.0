import React from 'react';
import './App.css';
import Hit from './Hit.mov';
import Miss from './Miss.wav';

class App extends React.Component {
  constructor() {
    super();
    global.clickStatusCell = Array(16).fill(false);
    global.count = 0;
    global.correctClick = 0;
    let boardSize = 16;
    let number = [];
    global.randomNumber = [];
    for (var i = 0; i < boardSize; i++) {
      number[i] = Math.floor(Math.random() * 2);
      if (number[i] === 1) {
        global.randomNumber[i] = 'hit';
        global.count++;
      } else {
        global.randomNumber[i] = 'miss';
      }
    }
    this.state = {
      gameStatus: 'gameInProgress',
      boardDisplay: 'board',
      cellBackground: global.randomNumber
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        cellBackground: Array(16).fill('tile')
      });
    }, 5000);
    setTimeout(() => {
      this.setState({ gameStatus: 'gameOver', boardDisplay: 'boardNone' });
    }, 12000);
  }

  handleClick(event) {
    var i = event;
    if (
      global.randomNumber[i] === 'hit' &&
      global.clickStatusCell[i] === false &&
      this.state.cellBackground[i] !== global.randomNumber[i]
    ) {
      global.correctClick++;
      global.clickStatusCell[i] = true;
      let audioEl = document.getElementsByClassName('audio-element')[0];
      audioEl.play();
      if (global.correctClick !== 0 && global.count === global.correctClick) {
        this.setState({ gameStatus: 'gameOver', boardDisplay: 'boardNone' });
      }
    } else {
      let audioEl = document.getElementsByClassName('audio-element2')[0];
      audioEl.play();
    }

    const newBackground = this.state.cellBackground.slice();
    newBackground[i] = global.randomNumber[i];
    this.setState({
      cellBackground: newBackground
    });
  }

  refreshPage() {
    window.location.reload(false);
  }

  render() {
    return (
      <div className='game'>
        <div id='messageArea'></div>

        <audio className='audio-element'>
          <source src={Hit}></source>
        </audio>

        <audio className='audio-element2'>
          <source src={Miss}></source>
        </audio>

        <div className={this.state.boardDisplay}>
          <div className='board-row1'>
            <button
              className={this.state.cellBackground[0]}
              onClick={() => this.handleClick(0)}></button>
            <button
              className={this.state.cellBackground[1]}
              onClick={() => this.handleClick(1)}></button>
            <button
              className={this.state.cellBackground[2]}
              onClick={() => this.handleClick(2)}></button>
            <button
              className={this.state.cellBackground[3]}
              onClick={() => this.handleClick(3)}></button>
          </div>
          <div className='board-row2'>
            <button
              className={this.state.cellBackground[4]}
              onClick={() => this.handleClick(4)}></button>
            <button
              className={this.state.cellBackground[5]}
              onClick={() => this.handleClick(5)}></button>
            <button
              className={this.state.cellBackground[6]}
              onClick={() => this.handleClick(6)}></button>
            <button
              className={this.state.cellBackground[7]}
              onClick={() => this.handleClick(7)}></button>
          </div>
          <div className='board-row3'>
            <button
              className={this.state.cellBackground[8]}
              onClick={() => this.handleClick(8)}></button>
            <button
              className={this.state.cellBackground[9]}
              onClick={() => this.handleClick(9)}></button>
            <button
              className={this.state.cellBackground[10]}
              onClick={() => this.handleClick(10)}></button>
            <button
              className={this.state.cellBackground[11]}
              onClick={() => this.handleClick(11)}></button>
          </div>
          <div className='board-row4'>
            <button
              className={this.state.cellBackground[12]}
              onClick={() => this.handleClick(12)}></button>
            <button
              className={this.state.cellBackground[13]}
              onClick={() => this.handleClick(13)}></button>
            <button
              className={this.state.cellBackground[14]}
              onClick={() => this.handleClick(14)}></button>
            <button
              className={this.state.cellBackground[15]}
              onClick={() => this.handleClick(15)}></button>
          </div>
        </div>

        <div className={this.state.gameStatus}>
          <h1>Game Over!</h1>
          <h2>
            Your Score: {global.correctClick} out of {global.count}
          </h2>
          <input
            type='button'
            value='Replay'
            onClick={() => this.refreshPage()}
          />
        </div>
      </div>
    );
  }
}

export default App;
