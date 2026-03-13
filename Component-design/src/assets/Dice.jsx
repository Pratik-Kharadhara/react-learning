import Die from "../Die"

export default function Dice({ dice , color}){

    return (
        <>
            <section className="Dice">
                {
                    dice.map((v,i)=>{
                            <Die key={i} value={v} color={color}/>
                    })
                }
                
                </section>    
        </>
    )

}