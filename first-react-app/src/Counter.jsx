// we will se how to use useSate
import { useState } from "react";
//if we dont use useState
// export default function Counter(){
//     let num=0;
//      function numIncrese(){
//     num=num+1;
//     console.log(num)
// }
    
//     return (
//         <div> not using react state
//             <p>the current num:{num}</p> 
// {/* **even after onClick this wont show us the value of num
//  -in the background although its increasin but its not increasing in the web page
//             */}
//         <button onClick={numIncrese}>click to increase</button>
//         </div>
//     )
// }

//using useState
export default function Counter(){
    const [num,setNum] = useState(0); //intializing num with 0
    //useState is on of a react hook where 
    //the num is peice of state
    //setNum in function to modify the peice
    //syntax  const [<whatEverYounWant>,<set<whatEverYounWant>>]=useState();
    //useState(5)=> this means the initial value is set to 5
    const numIncrese= ()=>{
            setNum(num + 1); //setNum is used to set the value of num
    }
    return (
        <div>
            using react hook
            <p>the num is:{num}</p>
            <button onClick={numIncrese}>click to increase</button>
        </div>
    )
}