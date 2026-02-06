export default function ColorName({ColorName}){
       const ColorList = ColorName.map((c)=>(<h2 style={{color:c}}>{c}</h2>))

    return(
        <>
            <h2>{ColorName}</h2> {/* this will return a merged array  */}
          {/* using MAP */}
           <ul>
                {ColorList}
           </ul>

        </>
        )
}