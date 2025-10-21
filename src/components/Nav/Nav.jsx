import "./Nav.css";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/useCartContext.js";

const Nav = () => {

  const { getTotalItems } = useCartContext();

  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/arrivals">Novedades</Link></li>
        <li><Link to="/category/products">Productos</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/cart">Carrito 
        {getTotalItems() && <span className="in-cart">  {getTotalItems()}</span>}
        </Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
