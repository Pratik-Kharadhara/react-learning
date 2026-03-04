import { useState } from "react"

export default function ScoreCounter({playerNo=3,target=5}){
    const[players,setPlayer]=useState(new Array(playerNo).fill(0));
    function addPoint(index){
            setPlayer(oldplayer=>
        {
            return oldplayer.map((scores,i)=>{
                if(i===index){
                    return scores+1;
                }
                return scores;
            })
        }
        )
        ;
        
    }
    return (
        <>
        <ul>
            
                {
                    players.map((score,idx)=>{
                        return <li key={idx}>
                            player{idx+1}={score}
                            {
                                // scores<=target && scores
                            }
                            <button onClick={()=>addPoint(idx)}>+1</button>
                        </li>
                    })
                }
           
        </ul>
        </>
    )
}