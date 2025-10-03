import "./Item.css"

const Item = ({name, price, description, imageUrl }) => {
  return (
    <>
      <article className="product-item">
        <h3 className="product-title">{name}</h3>
        <p>{description}</p>
        <p style={{fontWeight: 'bold'}}>Precio: ${price}</p>
        <img src={imageUrl} alt={name} />
        <button className="product-actions">Agregar al carrito</button>
      </article>
    </>
  );
};

export default Item;
