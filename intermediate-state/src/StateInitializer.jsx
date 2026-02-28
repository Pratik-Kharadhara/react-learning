import { useState } from "react";
function GenerateGameboard(){
        console.log('Making the intial stage');
        return Array(2000);
    }
export default function StateInitializer(){
    
    //const [board,setBoard] = useState(GenerateGameboard());//using this () when ever th button is cliked
    //it recalls the generateGameboard function in each re render of react 
    //but we want to stop that 
    const [board,setBoard] = useState(GenerateGameboard);//removing the () 
    //this prevent the re render of the function to stop for multiple times
    //this only run for the first time for inntiliazation then it will stop running and 
    //be ignored by the react

    return (
        <>
            <button onClick={()=> setBoard("hello!")}>clcik me</button>
        </>
    )
}

//why REACT re-renders , it will check the current state with previous state
//if it find current state to be same with the previous state
//it wont re render
//suppose we write a button such that every time it will set the state  to 10 
//for the first click it will re render 
//but in the next click when react will see that its the same as previous 
//it won't re render