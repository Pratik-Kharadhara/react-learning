import { useState } from 'react'
import './App.css'
import AddThree from './AddThree'
import StateInitializer from './stateInitializer'
import ScooreKeeper from './ScooreKeeper'
import EmojiSelect from './EmojiSelect'
import ScoreCounter from './ScoreCounter'

function App() {

  return (
  <>
  <h2>Intermediate State Concepts</h2>
    <ScoreCounter target={5} playerNo={5}/>
    
    {/* <EmojiSelect/> */}
    {/* <ScooreKeeper/> */}
    
    
    {/* <AddThree/> */}

  {/* <StateInitializer/> */}
  </>
  )
}

export default App
