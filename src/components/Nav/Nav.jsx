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
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
        {getTotalItems() && <span className="in-cart">Items en el carrito: {getTotalItems()}</span>}
      </ul>
    </nav>
  );
};

export default Nav;
