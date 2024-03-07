import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const isHomeContainer = isDarkTheme ? 'dark-container' : 'light-container'
      const isHomeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const isHomeColor = isDarkTheme ? 'dark-home' : 'light-home'
      return (
        <>
          <Navbar />
          <div className={`home-container ${isHomeContainer}`}>
            <img src={isHomeLogo} className="home-image" alt="home" />
            <h1 className={`home-heading ${isHomeColor}`}> Home </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
