import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
import { navLinks } from '../../constants'
import './navbar.css'
import { useState } from 'react'

const Navbar = () => {

  const [toggle, setToggle] = useState(true)

  const navItems = navLinks.map(link => (
    <li key={link.label}>
      <a href={link.href}>{link.label}</a>
    </li>
  ))

  return (
    <nav className='nav'>

        <img src={logo} alt="Logo" />
    
        <ul  className={toggle ? 'nav__links' : 'nav__links display_dropdown'}>
          {navItems}
          <li><button className='nav__login'>Login</button></li>
          <li>
          <button className='button'>Register</button>
          </li>
        </ul>

      <img className='nav__menu-toggle' src={toggle ? menu : close} alt="" onClick={() => setToggle(prevtoggle => !prevtoggle)}/>

        
        
        

    </nav>
  )
}

export default Navbar