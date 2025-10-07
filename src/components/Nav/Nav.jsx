import "./Nav.css";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/arrivals">Novedades</Link></li>
        <li><Link to="/category/products">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
