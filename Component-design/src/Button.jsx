import "./Button.css" 
export default function Button({clickFunc}){
    return (
            <>
                <button className="Button" onClick={clickFunc}>click me</button>
            </>
    )
}