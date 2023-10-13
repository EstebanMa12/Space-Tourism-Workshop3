import { useState } from 'react'
import Crew from './templates/Crew/Crew'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Destination from './templates/Destination/Destination'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Crew/>
      <Destination/>
    </>
  )
}

export default App
