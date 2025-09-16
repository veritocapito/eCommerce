import Item from "../Item/Item";

const ItemList = ({ lista }) => {
  return (
    <>
      {lista.length ? (
        lista.map((prod) => <Item key={prod.id} {...prod} /> )
      ) : (
        <p>No hay productos.</p>
      )}
    </>
  );
};

export default ItemList;
