import Item from "../Item/Item";

const ItemDetail = ({ detail }) => {
  return <Item { ...detail }>
    <button>Add to Cart</button>
  </Item>;
}

export default ItemDetail;