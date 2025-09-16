const Item = ({nombre, precio, descripcion, imagen }) => {
  return (
    <>
      <article>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>Precio: ${precio}</p>
        <img src={imagen} alt={nombre} />
        <button>Agregar al carrito</button>
      </article>
    </>
  );
};

export default Item;
