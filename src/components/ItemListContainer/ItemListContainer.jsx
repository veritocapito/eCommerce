import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/productService";

const ItemListContainer = ({ title }) => {
  const [ products, setProducts ] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts(category)
      .then((data)=> { setProducts(data)})
      .catch(err => console.log(err))
  },[category]);

  return (
    <section className="item-list-container">
      <h1>{title}</h1>
      <h2>{category === "products" ? "Nuestra Selección" : "Nueva Colección"}</h2>
      <h4>Descubre nuestra colección exclusiva para niños y niñas</h4>

      <ItemList lista={products} />
    </section>
  );
};

export default ItemListContainer;
