// import { useState } from "react"
// // here we are updating the array with use State
// export default function EmojiSelect(){
//     const[emoji,setEmoji]=useState(["😁"]);//declaring the array with one emoji
//     function addEmoji(){
//            setEmoji([...emoji,"😔"]);//same as obejcts use spread operator to create a new copy of the same 
//            //array and then set the emoji to the new copy array
//     }
//     return (
//         <>
//             <h2>updating array using use state</h2>
//             {
//                 emoji.map((e)=>{ //using map we are iterating all over the array to print the emojis present in the array
//                     return  <span style={{fontSize:"4rem"}}>{e}</span>
//                  //just returning the span of the array of the emojis
//                 })
//             }
//             <br />
//             <button onClick={addEmoji}>click to add</button>
//         </>
//     )
// }

//now we need to setup the uuid for each component in the array
//so that we can delete them in future
import { useState } from "react"
import {v4 as uuid} from "uuid";
export default function EmojiSelect(){
    const[emoji,setEmoji]=useState([{id:uuid(),emoji:"😁"}]);//declaring the array with one emoji and uuid for id 
    function addEmoji(){
           setEmoji([...emoji,{id:uuid(),emoji:"😴"}]);//
    }
    return (
        <>
            <h2>updating array using use state</h2>
            {
                emoji.map((e)=>{ //using map we are iterating all over the array to print the emojis present in the array
                    return  <span key={e.id} style={{fontSize:"4rem"}}>{e.emoji}</span>//if we dont write e.emoji cant access the emoji icon
                 //using the uuid we are generating random ids for our items 
                })
            }
            <br />
            <button onClick={addEmoji}>click to add</button>
        </>
    )
}