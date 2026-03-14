import Die from "./Die"
import Dice from "./Dice"
function App() {

  return (
    <>
      <Dice dice={[2,3,4]} />
      <Dice dice={[3,5,2]} />
      {/* {<Die value={2}/>} */}
    </>
  )
}

export default App
