import { useState } from "react"
// here we are updating the array with use State
export default function EmojiSelect(){
    const[emoji,setEmoji]=useState(["😁"]);//declaring the array with one emoji
    function addEmoji(){
           setEmoji([...emoji,"😔"]);//same as obejcts use spread operator to create a new copy of the same 
           //array and then set the emoji to the new copy array
    }
    return (
        <>
            <h2>updating array using use state</h2>
            {
                emoji.map((e)=>{ //using map we are iterating all over the array to print the emojis present in the array
                    return  <span style={{fontSize:"4rem"}}>{e}</span>
                 //just returning the span of the array of the emojis
                })
            }
            <br />
            <button onClick={addEmoji}>click to add</button>
        </>
    )
}