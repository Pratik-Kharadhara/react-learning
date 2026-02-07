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


function App() {
  // const [count, setCount] = useState(0)
  // const values = ['🐨','😴','❤️']

  //creating a shopping list items and their status
  const data = [
    {items:'Egg',price:'12/2',Status:true},
    {items:'Mango',price:'80',Status:false},
    {items:'Rice',price:'35',Status:true},
    {items:'Milk',price:'40',Status:false}
  ]
  return (
    <>
        <GrocceryList cart={data}/>

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
