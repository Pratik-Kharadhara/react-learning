import { useState } from "react";
import "./Box.css";
export default function Box(){
    const [isActive,setIsActive]=useState(false);
    const colorChange=()=>
        setIsActive(!isActive);
    console.log(isActive);
    return (
        <div onClick={colorChange} className="Box" style={{backgroundColor:isActive ? "red":"black"}}></div>
    )
}