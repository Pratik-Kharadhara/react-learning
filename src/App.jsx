import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter'
import ListPicker from './ListPicker'
import DiceRoll from './DiceRoll'
import ColorList from './ColorList'
import Slot from './Slot'


function App() {
  const [count, setCount] = useState(0)
  const values = ['🐨','😴','❤️']
  return (
    <>
        
        <Slot emojis={['🐨','😴','❤️']}/>
        {/* we can do both can write the array here or store it then acces it */}
        <Slot emojis={values}/>
        
        <DiceRoll/>
        <DiceRoll/>
       

        {/* for learning the usage of map */}
         <ColorList ColorName={['red','green',"blue"]}/> {/*see the ColorList component to understand it better      */}
         
         
         
         {/* <Greeter name="Pratik" number={20}/>
      <Greeter name="Pratik" number={30}/>
      <Greeter name="Pratik" number={30}/>
      <ListPicker numbers={[12,54,61]}/>  */}
    

    </>
      
  )
}

export default App
