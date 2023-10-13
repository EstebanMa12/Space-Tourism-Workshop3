import { useState } from 'react'
import Crew from './templates/Crew/Crew'

function App() {
  const [count, setCount] = useState(0)

  return (
     <Crew/>
  )
}

export default App
