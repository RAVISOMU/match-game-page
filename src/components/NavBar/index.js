import './index.css'

const NavBar = props => {
  const {time, score} = props
  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="nav-items-container">
        <li>
          <p className="score">
            Score: <span>{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
        </li>
        <li>
          <p className="time">{time} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
