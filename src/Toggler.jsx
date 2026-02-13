import {useState} from "react";
//here also we are using useState 
export default function  Toggler(){
    const [isHappy,setIsHappy] = useState('😁');
    const [count,setCount]= useState(0);
    function toggle(){
        // setIsHappy(!isHappy); //this is also working 
         setIsHappy(isHappy==='😁'?'😔':'😁'); //this is another approach
    }
        //here we are using multiple useState component and we can 
    function countInc(){
        setCount(count+1);
    }
     return (
        <div>
            <h3>the user is:{isHappy}
                {count}
            </h3>
            <button onClick={toggle}>click</button>
            <button onClick={countInc}>+</button>
            {/* <h2>{ isHappy ? "😁" : "😔"}</h2> */}
        </div>
     )
}