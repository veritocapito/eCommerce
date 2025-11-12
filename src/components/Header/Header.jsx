import Nav from "../Nav/Nav"
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h2>eCommerce</h2>
      </Link>
      <Nav />
    </header>
  )
}

export default Header
