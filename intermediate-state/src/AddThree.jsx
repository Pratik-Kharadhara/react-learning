import { useState } from "react";
//setting state using an updater function
export default function AddThree(){
    const [count, setCount]=useState(0);
    function add3(){
        //if we do like this this wont work as at each step react re renders it 
        //and the previous data is not sent it always re loads
            //so each time it re render the component thats why its not storing the previous data of coun
            //and thats why its not incrementing like 0+1=1,1+1=2,2+1=3
            //its like 0+1=1 for the same 3 lines
        // setCount(count + 1);
        // console.log(count);
        // setCount(count + 1);
        // console.log(count);
        // setCount(count + 1);
        // console.log(count);

        //***for this we will be using a updater function
        // so what it do is crtValue is var that stores the previous value and send it to state
        //USE CALLBACK FUNCTION WHEN THE PREVIOUS VALUE IS NEEDED TO UPDATE THE CURRENT VALUE
        setCount(crtValue =>crtValue+1);
        console.log(count);//at this we gonna see the old value because untill the whole component not re runs it wont change it self 
        setCount(crtValue =>crtValue+1);
        console.log(count);
        setCount(crtValue =>crtValue+1);
        console.log(count);

    }
    return (
        <>
            <h2>The Count is {count}</h2>
            <button onClick={add3}>click to +</button>
        </>
    )
}  