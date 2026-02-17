import RentalItem from "./RentalItem"
import "./RentalItem.css"
export default function Rental({value}){
   //this value obejct of every key value pair from property
   console.log(value) //(6) [{…}, {…}, {…}, {…}, {…}, {…}] 
    return (
           <div className="rental-Component">
                {
                    value.map((each)=>{ //using map we are iterating over all the key value pair
                     return (
                        //we are sendinng all the key value to the RentalItem child node
                     <RentalItem key={each.id} {...each}/>//using spread its sending them individually

                     )
                    })
                }
           </div>
                
           
        )
}