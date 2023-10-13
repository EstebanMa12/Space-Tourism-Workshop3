import { useState } from 'react'
import './templates/Home/styles/mainStyle.scss'
import Home from './templates/Home/Home.jsx'
import Nav from './Nav.jsx'
import Crew from './templates/Crew/Crew'
import Destination from './templates/Destination/Destination'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <div className="container">
            <Nav/>
            <Routes>
                {<Route path='/' element={ <Home/> } />}
                {<Route path='/crew' element={ <Crew/> } />}
                {<Route path='/destination' element={ <Destination/> } />}
                   
            </Routes>        
        </div>
    </Router>
  ) 
}

export default App
