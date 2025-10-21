import Item from "../Item/Item";
import { useCartContext } from "../../context/useCartContext.js";
import Count from "../Count/Count";

const ItemDetail = ({ detail }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = (quantity) => {
    addToCart({ ...detail, quantity });
  };

  return (
    <Item {...detail}>
      <Count btnText="Agregar al carrito" onAddToCart={handleAddToCart} />
    </Item>
  );
};

export default ItemDetail;
