import './App.css';
import React ,{useState} from 'react';
function App() {
  const [turn,setTurn]=useState("X");
  const [gameFinish,setGameFinis]=useState(false);
  const [board,setBoard]=useState(["","","","","","","","",""]);
  const [countMove,setCountMove]=useState(0);
  const [winner,setWinner]=useState("");
let i=1;

  const handleClick=e=>{
    if(gameFinish) return ;
    let  newArr=[...board];
    if(newArr[e.target.dataset.squard] ==="" ){
      newArr[e.target.dataset.squard]=turn;
      board[e.target.dataset.squard]=turn;
      e.target.innerText=turn;
      turn === "X" ? setTurn("O") : setTurn("X");
       i=countMove+1;
      setCountMove(i)
    }
    let result =winnerControl();
    if(result === "X"){
      setWinner("X");
      setGameFinis(true);
    }else if(result==="O"){
      setWinner("O");
      setGameFinis(true);
    }else if(result==="Beraberlik"){
      setWinner(result);
      setGameFinis(true)
    }
  }

  function winnerControl(){
    let arr=[...board];
    const winnerMove=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];  
    for(let i=0;i<winnerMove.length;i++){
      if(arr[winnerMove[i][0]] === arr[winnerMove[i][1]] &&  arr[winnerMove[i][1]] ===  arr[winnerMove[i][2]] ){ 
        if(arr[winnerMove[i][0]] ==="X")
            return arr[winnerMove[i][0]]
        else if(arr[winnerMove[i][0]] ==="O") 
            return arr[winnerMove[i][0]]   
        }
    }
    if(countMove === 8){
      return "Beraberlik";
    } 
  }

  return (
    <div className="App">
      <div id="game">
        <div id="head">
          <h2>Tic Tac Toe </h2>
          <h3>{winner!=="" ?<WinnerShow name={winner}/>: null}</h3>
        </div>
        <div id="board" onClick={(e)=>handleClick(e)}>
          <div className="squard" data-squard="0"></div>
          <div className="squard" data-squard="1"></div>
          <div className="squard" data-squard="2"></div>
          <div className="squard" data-squard="3"></div>
          <div className="squard" data-squard="4"></div>
          <div className="squard" data-squard="5"></div>
          <div className="squard" data-squard="6"></div>
          <div className="squard" data-squard="7"></div>
          <div className="squard" data-squard="8"></div>
        </div>
      </div>
    </div>
  );
}
function WinnerShow(props){
  return(
    <span>KAZANAN: {props.name}</span>
  )
}
export default App;
