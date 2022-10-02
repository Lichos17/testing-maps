import { Link } from 'react-router-dom'

import '../../styles/components/commons/Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar container'>
      <h1 className='navbar__logo'>Melp</h1>
      <nav className='navbar__navigation'>
        <ul className='navbar__links'>
          <li className='navbar__link'>
            <Link to={'home'}>Home</Link>
          </li>{' '}
        </ul>
      </nav>
    </div>
  )
}
