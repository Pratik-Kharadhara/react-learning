import { useState } from "react"
//updating objects using state
export default function ScooreKeeper(){
    //unlike updating string or values its a little difficult
    const[data,setData] = useState({player1:0,player2:0});//here is our two player points initialized to 0
    function manageP1(){ //this function will update the p1's scoore
     const score1=   {...data,player1:data.player1+1}; //...data is spreading the data object and creating a new one 
     // player1 : data.player1+1 this is updating the value by 1 and storing that to the new varible
     setData(score1); //using setData we are setting the value of player 1
    }
    //similiarly we are doing with the player 2 
    function manageP2(){
     const score2=   {...data,player2:data.player2+1};
     setData(score2);
    }
    return (
        <>
        <h2>
            player 1 score: {data.player1}
            player 2 score : {data.player2}
        </h2>
        <button onClick={manageP1}>player 1 +1</button>
        <button onClick={manageP2}>player 2 +1</button>
        </>
    )
} 