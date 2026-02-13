import "./Colorbox.css"
import {useState} from "react";

export default function Colorbox({colors}){
    console.log('reached colorbox');
    
    const  randomColor = (colros)=> {
        const ranCol = Math.floor(Math.random()* colors.length)+1;
        const selecColor = colors[ranCol];
        return selecColor;
    }
    const [crtClr,setCrtClr]=useState(randomColor());

    const assingedColor=()=>{
            setCrtClr(randomColor());
            let style;
            return(
                style={backgroundColor:`${crtClr}`}
            )
    }
    
    
    
return(
    <div className="box" style={{backgroundColor:`${randomColor()}`}} onClick={assingedColor}>
       
    </div>
)
}