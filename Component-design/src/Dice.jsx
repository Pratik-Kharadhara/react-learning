import Die from "./Die"

export default function Dice({ dice , color}){

    return (

            <section className="Dice">
                {//map on no of dice so that create that no of dice
                    dice.map((v,i)=>{
                        console.log('i am reaching here ')
                        return <Die key={i} value={v} color={color}/>
                    })
                }
                
                </section>    
    )

}