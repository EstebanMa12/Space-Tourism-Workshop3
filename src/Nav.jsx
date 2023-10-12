import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './templates/Home/img/logo.svg'
import burgerIcon from './templates/Home/img/icon-hamburger.svg'
import closeIcon from './templates/Home/img/icon-close.svg'
import { useLocation } from 'react-router-dom'


const Nav = () => {
    const [open,setOpen] = React.useState(false)
    const [active,setActive] = React.useState(window.location.pathname.replace('/','')||'home')

    const location = useLocation()
    console.log(location)
    function close() {
        setOpen(false)
    }

    React.useEffect(() => {
        setActive(location.pathname.replace('/','') ? location.pathname.replace('/','') : 'home')
    },[location])

  return (
    <>
        <header>
            <nav className={`nav ${open?'show':""}`}>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <ul className={active}>
                    <li onClick={close}><Link to='/'>00 Home</Link></li>
                    <li onClick={close}><Link to='/destination'>01 Destination</Link></li>
                    <li onClick={close}><Link to='/crew'>02 Crew</Link></li>
                    <li onClick={close}><Link to='/technology'>03 Technology</Link></li>
                </ul>
                <div onClick={()=>setOpen(!open)} className="burger">
                    {
                        open === false ?
                        
                            <img src={ burgerIcon } alt="" /> :
                            <img src={ closeIcon } alt="" />
                            
                    }
                </div>
            </nav>
        </header>

    </>
  )
}

export default Nav