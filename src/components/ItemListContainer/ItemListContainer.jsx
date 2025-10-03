import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ title }) => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(res=>res.json())
      .then(data=> setProducts(data))
      .catch(err => console.log(err))
  },[]);

  return (
    <section className="item-list-container">
      <h2>{title}</h2>
      <p>Conoce los ultimos lanzamientos de la temporada!</p>

      <ItemList lista={products} />
    </section>
  );
};

export default ItemListContainer;
