import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board.js'
import Hit from './Hit.mov';
import Miss from './Miss.wav';




class App extends React.Component{

constructor(){
  super()
    global.clickStatusCell = Array(16).fill(false)
    global.count = 0
    global.correctClick = 0
    let boardSize = 16
    let number= []
    global.randomNumber = []
    for(var i=0;i<boardSize;i++){
    number[i] = Math.floor(Math.random() * 2)
    if (number[i]===1){global.randomNumber[i]="hit"; global.count++}else{global.randomNumber[i]="miss"}}
    this.state={
                  gameStatus:"gameInProgress",
                  boardDisplay:"board",
                  cellBackground0:  global.randomNumber[0],
                  cellBackground1:  global.randomNumber[1],
                  cellBackground2:  global.randomNumber[2],
                  cellBackground3:  global.randomNumber[3],
                  cellBackground4:  global.randomNumber[4],
                  cellBackground5:  global.randomNumber[5],
                  cellBackground6:  global.randomNumber[6],
                  cellBackground7:  global.randomNumber[7],
                  cellBackground8:  global.randomNumber[8],
                  cellBackground9:  global.randomNumber[9],
                  cellBackground10: global.randomNumber[10],
                  cellBackground11: global.randomNumber[11],
                  cellBackground12: global.randomNumber[12],
                  cellBackground13: global.randomNumber[13],
                  cellBackground14: global.randomNumber[14],
                  cellBackground15: global.randomNumber[15],

    }
}



componentDidMount(){

    setTimeout(()=>{
        this.setState({
                  cellBackground0:  "tile",
                  cellBackground1:  "tile",
                  cellBackground2:  "tile",
                  cellBackground3:  "tile",
                  cellBackground4:  "tile",
                  cellBackground5:  "tile",
                  cellBackground6:  "tile",
                  cellBackground7:  "tile",
                  cellBackground8:  "tile",
                  cellBackground9:  "tile",
                  cellBackground10: "tile",
                  cellBackground11: "tile",
                  cellBackground12: "tile",
                  cellBackground13: "tile",
                  cellBackground14: "tile",
                  cellBackground15: "tile",



                   
            
             })}, 5000)
    setTimeout(()=>{ this.setState({gameStatus: "gameOver", boardDisplay:"boardNone" })}, 12000)
}




handleClick0(){
  
  if (global.randomNumber[0]==="hit" && global.clickStatusCell[0]=== false && this.state.cellBackground0 !==global.randomNumber[0] )
    {global.correctClick++; global.clickStatusCell[0] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})} }
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground0:global.randomNumber[0]
         })
}


handleClick1(){
  if (global.randomNumber[1]==="hit" && global.clickStatusCell[1]=== false && this.state.cellBackground1 !==global.randomNumber[1])
    {global.correctClick++; global.clickStatusCell[1] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground1:global.randomNumber[1]
         })
}

handleClick2(){
  if (global.randomNumber[2]==="hit" && global.clickStatusCell[2]=== false && this.state.cellBackground2 !==global.randomNumber[2])
    {global.correctClick++; global.clickStatusCell[2] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground2:global.randomNumber[2]
         })
}

handleClick3(){
  if (global.randomNumber[3]==="hit" && global.clickStatusCell[3]=== false && this.state.cellBackground3 !==global.randomNumber[3])
    {global.correctClick++; global.clickStatusCell[3] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground3:global.randomNumber[3]
         })
}
handleClick4(){
  if (global.randomNumber[4]==="hit" && global.clickStatusCell[4]=== false && this.state.cellBackground4 !==global.randomNumber[4])
    {global.correctClick++; global.clickStatusCell[4] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground4:global.randomNumber[4]
         })
}

handleClick5(){
  if (global.randomNumber[5]==="hit" && global.clickStatusCell[5]=== false && this.state.cellBackground5 !==global.randomNumber[5])
    {global.correctClick++; global.clickStatusCell[5] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground5:global.randomNumber[5]
         })
}

handleClick6(){
  if (global.randomNumber[6]==="hit" && global.clickStatusCell[6]=== false && this.state.cellBackground6 !==global.randomNumber[6])
    {global.correctClick++; global.clickStatusCell[6] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground6:global.randomNumber[6]
         })
}

handleClick7(){
  if (global.randomNumber[7]==="hit" && global.clickStatusCell[7]=== false && this.state.cellBackground7 !==global.randomNumber[7])
    {global.correctClick++; global.clickStatusCell[7] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground7:global.randomNumber[7]
         })
}

handleClick8(){
  if (global.randomNumber[8]==="hit" && global.clickStatusCell[8]=== false && this.state.cellBackground8 !==global.randomNumber[8])
    {global.correctClick++; global.clickStatusCell[8] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground8:global.randomNumber[8]
         })
}

handleClick9(){
  if (global.randomNumber[9]==="hit" && global.clickStatusCell[9]=== false && this.state.cellBackground9 !==global.randomNumber[9])
    {global.correctClick++; global.clickStatusCell[9] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground9:global.randomNumber[9]
         })
}

handleClick10(){
  if (global.randomNumber[10]==="hit" && global.clickStatusCell[10]=== false && this.state.cellBackground10 !==global.randomNumber[10])
    {global.correctClick++; global.clickStatusCell[10] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground10:global.randomNumber[10]
         })
}

handleClick11(){
  if (global.randomNumber[11]==="hit" && global.clickStatusCell[11]=== false && this.state.cellBackground11 !==global.randomNumber[11])
    {global.correctClick++; global.clickStatusCell[11] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground11:global.randomNumber[11]
         })
}


handleClick12(){
  if (global.randomNumber[12]==="hit" && global.clickStatusCell[12]=== false && this.state.cellBackground12 !==global.randomNumber[12])
    {global.correctClick++; global.clickStatusCell[12] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground12:global.randomNumber[12]
         })
}

handleClick13(){
  if (global.randomNumber[13]==="hit" && global.clickStatusCell[13]=== false && this.state.cellBackground13 !==global.randomNumber[13])
    {global.correctClick++; global.clickStatusCell[13] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground13:global.randomNumber[13]
         })
}

handleClick14(){
  if (global.randomNumber[14]==="hit" && global.clickStatusCell[14]=== false && this.state.cellBackground14 !==global.randomNumber[14])
    {global.correctClick++; global.clickStatusCell[14] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground14:global.randomNumber[14]
         })
}


handleClick15(){
  if (global.randomNumber[15]==="hit" && global.clickStatusCell[15]=== false && this.state.cellBackground15 !==global.randomNumber[15])
    {global.correctClick++; global.clickStatusCell[15] =true; 
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play();if(global.correctClick!==0 && global.count===global.correctClick){this.setState({gameStatus: "gameOver", boardDisplay:"boardNone"})}}
    else{let audioEl = document.getElementsByClassName("audio-element2")[0]
    audioEl.play();}

    this.setState({
            cellBackground15:global.randomNumber[15]
         })
}



refreshPage(){
    window.location.reload(false);
}





  render(){



 return (
<div className="game">
    


<div id="messageArea"></div>

<audio className="audio-element">
<source src={Hit}></source>
</audio>


<audio className="audio-element2">
<source src={Miss}></source>
</audio>
        
        <div className = {this.state.boardDisplay}>
        <div className="board-row1">
          <button className={this.state.cellBackground0} onClick={()=>this.handleClick0()}></button>
          <button className={this.state.cellBackground1} onClick={()=>this.handleClick1()}></button>
          <button className={this.state.cellBackground2} onClick={()=>this.handleClick2()}></button>
          <button className={this.state.cellBackground3} onClick={()=>this.handleClick3()}></button>
        </div>
        <div className="board-row2">
          <button className={this.state.cellBackground4} onClick={()=>this.handleClick4()}></button>
          <button className={this.state.cellBackground5} onClick={()=>this.handleClick5()}></button>
         <button className={this.state.cellBackground6} onClick={()=>this.handleClick6()}></button>
          <button className={this.state.cellBackground7} onClick={()=>this.handleClick7()}></button>
        </div>
        <div className="board-row3">
          <button className={this.state.cellBackground8} onClick={()=>this.handleClick8()}></button>
          <button className={this.state.cellBackground9} onClick={()=>this.handleClick9()}></button>
          <button className={this.state.cellBackground10} onClick={()=>this.handleClick10()}></button>
         <button className={this.state.cellBackground11}onClick={()=>this.handleClick11()}></button>
        </div>
        <div className="board-row4">
          <button className={this.state.cellBackground12} onClick={()=>this.handleClick12()}></button>
          <button className={this.state.cellBackground13} onClick={()=>this.handleClick13()}></button>
          <button className={this.state.cellBackground14} onClick={()=>this.handleClick14()}></button>
         <button className={this.state.cellBackground15} onClick={()=>this.handleClick15()}></button>
        </div>
      </div>
      
      <div className= {this.state.gameStatus}>
        <h1>Game Over!</h1>
        <h2>Your Score: {global.correctClick} out of {global.count}</h2>
        <input type = "button" value ="Replay" onClick={()=>this.refreshPage()}/>
      </div>

    </div>
    
  );
}

}

export default App;
