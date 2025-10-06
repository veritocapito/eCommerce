import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const product = data.find(item => item.id === "1");
        product ? setDetail(product) : Promise.reject(new Error("Product not found"));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>{Object.keys(detail).length ?
      (<ItemDetail detail={detail} />) : (<p>Cargando...</p>)
    }</main>
  );
};

export default ItemDetailContainer;
