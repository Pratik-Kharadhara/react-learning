import Die from "./Die"
import Dice from "./Dice"
import Lucky7 from "./lucky7"
import Lucky7Mod from "./Lucky7Mod"
import {sum} from "./utils"
function App() {
  //passing function as a prop through the component
  function less4(dice){
    //check if the sum of dice is <4 or not
    return sum(dice)<4 ;
  }
  //another function to check all the values are same or not 
  function allSameValue(dice){
    return dice.every((v)=>(v === dice[0]));
  }
  return (
    <>
      <Lucky7Mod winCheck={allSameValue}/>
    </>
  )
}

export default App
