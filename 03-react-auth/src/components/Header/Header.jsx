import { NavLink } from 'react-router-dom'
import './header.scss'

const Header = () => {
  // Se compara si el link está activo o no, con ayuda del NavLink
  const linkIsActive = ( { isActive, isPending }) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }
  return (
    <nav className='header'>
      <NavLink className='header-logo' href='/'>Logo</NavLink>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink className='header__item-link header__item-link--is-active' href='/home'>Home</NavLink>
        </li>
        <li className='header__list-link'>
          <NavLink className='header__item-link' href='/dashboar'>Dashboard</NavLink>
        </li>
        <li className='header__list-link'>
          <NavLink className='header__item-link' href='/login'>Login</NavLink>
        </li>
        <li className='header__list-link'>
          <NavLink className='header__item-link' href='/secret'>Secret</NavLink>
        </li>
        <li className='header__list-link'>
          <NavLink className='header__item-link' href='/signup'>Signup</NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default Header
