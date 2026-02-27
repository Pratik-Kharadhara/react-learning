import { useState } from "react";
function GenerateGameboard(){
        console.log('Making the intial stage');
        return Array(2000);
    }
export default function StateInitializer(){
    
    const [board,setBoard] = useState(GenerateGameboard());
    return (
        <>
            <button onClick={()=> setBoard("hello!")}>clcik me</button>
        </>
    )
}