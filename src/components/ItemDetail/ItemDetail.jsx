import Item from "../Item/Item";
import { useCartContext } from "../../context/useCartContext.js";

const ItemDetail = ({ detail }) => {
const { addToCart } = useCartContext();

  return <Item { ...detail }>
    <button onClick={() => addToCart(detail)}>Comprar</button>
  </Item>;
}

export default ItemDetail;