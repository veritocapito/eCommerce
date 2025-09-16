import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ productos, titulo }) => {
  //estado

  //llamada a una api

  return (
    <section>
      <h2>{titulo}</h2>
      <p>Bienvenidos a nuestra tienda online</p>

      <ItemList lista={productos} />
    </section>
  );
};

export default ItemListContainer;
