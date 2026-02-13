import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter'
import ListPicker from './ListPicker'
import DiceRoll from './DiceRoll'
import ColorList from './ColorList'
import Slot from './Slot'
import GrocceryList from './GrocceryList'
import Rental from './Rental'
import Clicker from './Clicker'
import Counter from './Counter'
import Toggler from './Toggler'



function App() {






  // const [count, setCount] = useState(0)
  // const values = ['🐨','😴','❤️']

  //creating a shopping list items and their status
  const data = [
    {id:1,items:'Egg',price:'12/2',Status:true},
    {id:2,items:'Mango',price:'80',Status:false},
    {id:3,items:'Rice',price:'35',Status:true},
    {id:4,items:'Milk',price:'40',Status:false}
  ]


  const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
  return (
    <>
        
      <Toggler/>


    {/* <Counter/>   */}






        {/* <Clicker msg={"hiii!!"} buttonTxt={"click me!"}/> */}
        
        {/* <Rental value={properties} /> */}
        {/* <GrocceryList cart={data}/> */}

        {/* <Slot emojis={['🐨','😴','❤️']}/> */}
        {/* we can do both can write the array here or store it then acces it */}
        {/* <Slot emojis={values}/>
        
        <DiceRoll/>
        <DiceRoll/> */}
       

        {/* for learning the usage of map */}
         {/* <ColorList ColorName={['red','green',"blue"]}/> see the ColorList component to understand it better      */}
         
         
         
         {/* <Greeter name="Pratik" number={20}/>
      <Greeter name="Pratik" number={30}/>
      <Greeter name="Pratik" number={30}/>
      <ListPicker numbers={[12,54,61]}/>  */}
    

    </>
      
  )
}

export default App
