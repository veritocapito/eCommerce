import "./Count.css";  
import { useState } from "react";  

const Count = ({btnText, onAddToCart}) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const decrement = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }

    const handleAddToCart = () => {
        onAddToCart(count);
        setCount(0);
    }

  return (
    <div className="count-container">
        <div className="count-buttons">
            <button className="count-button" onClick={decrement}>-</button>
            <span className="count-number">{count}</span>
            <button className="count-button" onClick={increment}>+</button>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart} disabled={count === 0}>{btnText}</button>
    </div>
  )
}

export default Count