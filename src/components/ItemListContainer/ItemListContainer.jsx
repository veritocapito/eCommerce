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
      <h1>{title}</h1>
      <h3>Descubre nuestra colección exclusiva para niños y niñas</h3>

      <ItemList lista={products} />
    </section>
  );
};

export default ItemListContainer;
