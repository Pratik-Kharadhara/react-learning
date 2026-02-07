        
export default function GrocceryListItem({items,price,Status}){
   
    return (
        <ul>
            <li style={{
                    color:Status? "green":"red",
                    textDecoration: Status? "line-through":null,
                }}>
                     {items} -  ${price} 
                </li>
        </ul>
    )
}