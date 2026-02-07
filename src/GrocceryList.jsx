export default function GrocceryList({cart}){
    console.log(cart[2].items)
    return  (
    <ul>
            {cart.map( (list) => 
                <li style={{
                    color:list.Status? "green":"red",
                    textDecoration: list.Status? "line-through":null,
                }}>
                     {list.items} -  ${list.price} 
                </li>
                
                

            )}
        
    </ul>
)
}