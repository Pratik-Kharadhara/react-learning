export default function Slot({emojis}){
//here we are just taking the emoji array and making a random variable to acces one of the emojis from the list
    const slotEmoji1 = emojis[ Math.floor(Math.random()*emojis.length)]
    const slotEmoji2 = emojis[ Math.floor(Math.random()*emojis.length)]
    const slotEmoji3 = emojis[ Math.floor(Math.random()*emojis.length)]
//its a dynamic stling method where if win->green loose->red
    const style = {
        color : slotEmoji1===slotEmoji2 && slotEmoji2===slotEmoji3 ? "green" : "red" ,
        fontSize : '24px'
    }
    return (
        <div style={style}> 
            {/* below its checking emoji1 and emoji2 same and emoji2 and emoji3 
            are same or not , if yes then green if not then red */}
                 {slotEmoji1===slotEmoji2 && slotEmoji2===slotEmoji3 ? "you won":"you loose"}
            <h2>{slotEmoji1} , {slotEmoji2} , {slotEmoji3} </h2>
        </div>
    )
}