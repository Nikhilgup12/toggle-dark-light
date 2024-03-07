import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const isHomeContainer = isDarkTheme ? 'dark-container' : 'light-container'
      const isHomeColor = isDarkTheme ? 'dark-home' : 'light-home'
      return (
        <>
          <Navbar />
          <div className={`home-container ${isHomeContainer}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="home-image"
              alt="not found"
            />
            <h1 className={`home-heading ${isHomeColor}`}> Lost Your Way? </h1>
            <p className={`home-heading ${isHomeColor}`}>
              we cannot seem before again page not found
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
