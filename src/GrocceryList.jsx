import GrocceryListItem from "./GroceeryListItem"
//here we are making the Groccery listing a sperate element in GroceeryListItem
//so that we can use that component multiple places 
export default function GrocceryList({cart}){
    return  (
    <ul>
            {cart.map( (list) => 
                // {console.log(list)} ,
               // <GrocceryListItem {...list}/>// by using spread  item we can send all the key of list here to the child component
                <GrocceryListItem 
                    key = {list.id}
                    items={list.items}
                    price={list.price}
                    Status={list.Status}
                />

            )}
        
    </ul>
)
}