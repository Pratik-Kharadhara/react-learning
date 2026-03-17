import { useState } from "react"
import Dice from "./Dice"
import { getRolls , sum } from "./utils"
export default function Lucky7({numDice=2,goal=7}){
    const[dice,setDice]=useState(getRolls(numDice));
    console.log(dice)
    
    const isWinner = sum(dice) === goal; //checking if its same with the goal or not 
    function roll(){
        setDice(getRolls(numDice)); //it rolls the dice if button is clicked
    }
    return (
        <div className="LuckyN">  <h1>   THE LUCKY {goal} GAME</h1>
           <h3>
                {
                        isWinner && <b style={{color:"red"}}>you won!!</b>
                }
            </h3>
            <h2>
                {
                  <Dice dice={dice}/>
                }
            </h2>
            
            <button onClick={roll}>
                    ROLL
            </button>
        </div>
    )
}