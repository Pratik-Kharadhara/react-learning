export default function DiceRoll(){
    const User1 = Math.floor(Math.random()*6+1);
    const User2 = Math.floor(Math.random()*6+1);
    const style = {
        //we can write the style property dynamically
        color : User1 === User2 ? "green" : "red"
    }

    //we can use ternary operator in line
     return (
        <div className="Dice ROLL" style={style}>
            <h2>{User1===User2 ? "you win!" : "you loose :("}</h2>
        <h3>User 1 ={User1} ,
        User 2 ={User2}
         </h3>
        </div>
    )
    
    //now if we want only send you win and dont want to render other things 
   

    //   return (
    //     <div>
    //         <h2>{User1===User2 && <h3>you win!!</h3>}</h2>
    //     <h3>User 1 ={User1} ,
    //     User 2 ={User2}
    //      </h3>
    //     </div>
    // ) //here only our required you win h3 is rendering which is saving lot of time and spcae 
    

    //now we will se in how many ways we can write the condition for
    //if both user's dice get same i win other wise i will lose 
    // if(User1===User2){
    //     return(
    //         <div>
    //             <h2>you win!</h2>
    //             <h3>User 1 ={User1}
    //                 User 2 ={User2}
    //             </h3>
    //         </div>
    //     )
    // }
    // else {
    //     return(
    //         <div>
    //             <h2>you lose!</h2>
    //             <h3>User 1 ={User1} ,
    //                 User 2 ={User2}
    //             </h3>
    //         </div>
    //     )
    // } here we can see how many times we have to repeat same things

    //ternary operator 
    // const Status = User1===User2 ? "you win!" : "you loose :("

    // return (
    //     <div>
    //         <h2>{Status}</h2>
    //     <h3>User 1 ={User1} ,
    //     User 2 ={User2}
    //      </h3>
    //     </div>
    // )
    


    
} 