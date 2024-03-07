import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickTheme = () => {
        toggleTheme()
      }
      const isNavContainer = isDarkTheme ? 'is-dark' : 'is-light'
      const isNavLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const isNavTheme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const isHomeColor = isDarkTheme ? 'dark-home' : 'light-home'
      return (
        <nav className={`nav-container ${isNavContainer}`}>
          <div className="nav-content">
            <img src={isNavLogo} className="nav-logo" alt="website logo" />
            <ul className="nav-menu">
              <li>
                <Link to="/" className={`nav-item ${isHomeColor}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`nav-item ${isHomeColor}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              onClick={onClickTheme}
              className="nav-theme-btn"
              data-testid="theme"
              type="button"
            >
              <img src={isNavTheme} className="nav-theme" alt="theme" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
