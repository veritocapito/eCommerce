import './Cart.css'
import {useCartContext} from '../../context/useCartContext'

const Cart = () => {
  const { cart, clearCart, getTotal, deleteItem, checkout } = useCartContext()

  return (
    <section className="item-list-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} {...item} className='cart-item'>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => deleteItem(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="total-pagar">
            <p>Total a pagar: ${getTotal()}</p>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <button onClick={checkout}>Finalizar Compra</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cart