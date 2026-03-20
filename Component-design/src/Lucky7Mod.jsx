//modified version of the lucky7
import { useState } from "react"
import Dice from "./Dice"
import { getRolls } from "./utils"
import Button from "./button";
export default function Lucky7({numDice=2,winCheck}){ //winCheck recieves a function which is passed as a prop
    const[dice,setDice]=useState(getRolls(numDice));
    //console.log(dice)
    
    const isWinner = winCheck(dice);    
    function roll(){
        setDice(getRolls(numDice)); //it rolls the dice if button is clicked
    }
    return (
        <div className="LuckyN">  <h1>   THE LUCKY GAME</h1>
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
         {/* Instead of using button we will be using a button component which
         later on can be reused  */}
        <Button clickFunc={roll}/> {/* roll is a state updater function which is also can be passed as a prop*/}
        </div>
    )
}