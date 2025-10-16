import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const product = data.find(item => item.id === id);
        product ? setDetail(product) : Promise.reject(new Error("Product not found"));
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <main>{Object.keys(detail).length ?
      (<ItemDetail detail={detail} />) : (<p>Cargando...</p>)
    }</main>
  );
};

export default ItemDetailContainer;
