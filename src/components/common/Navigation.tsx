import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'home'}>Home</Link>
          </li>
          <li>
            <Link to={'stats'}>Stats</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
