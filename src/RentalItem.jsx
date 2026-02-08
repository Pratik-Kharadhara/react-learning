import "./RentalItem.css"
export default function RentalItem({name,rating,price}){
    return (
        <div className="item-element">{/*here all the key value pair is sended*/}
            <h2>{name}</h2>
            <h3>⭐{rating}</h3>
            <h4>${price}</h4>
        </div>
    )
}