import './header.scss'

const Header = () => {
  return (
    <nav className='header'>
      <a className='header-logo' href='/'>Logo</a>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <a className='header__item-link' href='/home'>Home</a>
        </li>
        <li className='header__list-link'>
          <a className='header__item-link' href='/dashboar'>Dashboard</a>
        </li>
        <li className='header__list-link'>
          <a className='header__item-link' href='/login'>Login</a>
        </li>
        <li className='header__list-link'>
          <a className='header__item-link' href='/secret'>Secret</a>
        </li>
        <li className='header__list-link'>
          <a className='header__item-link' href='/signup'>Signup</a>
        </li>
      </ul>

    </nav>
  )
}

export default Header
