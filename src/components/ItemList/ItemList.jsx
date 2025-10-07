import Item from "../Item/Item";
import "./ItemList.css"
import { Link } from "react-router-dom";

const ItemList = ({ lista }) => {
  return (
    <div className="item-list">
      {lista.length ? (
        lista.map((prod) => 
          <Link key={prod.id} to={`/detail/${prod.id}`}>
            <Item {...prod} />
          </Link>
        )
      ) : (
        <p>No hay productos.</p>
      )}
    </div>
  );
};

export default ItemList;
