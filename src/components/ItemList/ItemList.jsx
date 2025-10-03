import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({ lista }) => {
  return (
    <div className="item-list">
      {lista.length ? (
        lista.map((prod) => <Item key={prod.id} {...prod} /> )
      ) : (
        <p>No hay productos.</p>
      )}
    </div>
  );
};

export default ItemList;
