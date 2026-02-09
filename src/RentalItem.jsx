import "./RentalItem.css"
export default function RentalItem({name,rating,price}){
    return (
        <div className="item-element" style={{
            width: "400px",
            height: "200px",
            border: "2px solid"
        }}>{/*here all the key value pair is sended*/}
            <h2>{name}</h2>
            <h3>⭐{rating}</h3>
            <h4>${price}</h4>
        </div>
    )
}