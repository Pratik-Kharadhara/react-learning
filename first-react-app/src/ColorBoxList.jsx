import Colorbox from "./Colorbox";
import "./ColorBoxList.css"
export default function ColorBoxList({numBox}){
    console.log('reached colorboxlist')
     const colors= [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722"
]



    const boxes= new Array(numBox).fill(0);

    return(
            <div className="colorbox-list">
                {
                    boxes.map((value,index)=>{
                        return <Colorbox key={index} colors={colors}/>
                    })
                    
                }

            </div>
    )
}