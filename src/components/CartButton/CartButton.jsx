import { useDispatch, useSelector } from 'react-redux';
import './CartButton.css';

const CartButton = ({ id }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const incart = cart.incart;
  const elementInCart = Object.keys(incart).includes(id);
  const botsInCart_count = incart[id];

  return (
    <div>
      {!elementInCart ? (
        <button onClick={() => dispatch({ type: 'addToCart', payload: id })}>
          Buy
        </button>
      ) : (
        <div className="cart-btn-container">
          <button
            className="plus"
            onClick={() => dispatch({ type: 'addToCart', payload: id })}
          >
            +
          </button>
          <div>{botsInCart_count}</div>
          <button
            className="minus"
            onClick={() => dispatch({ type: 'dropFromCart', payload: id })}
          >
            -
          </button>
        </div>
      )}
    </div>
  );
};

export default CartButton;
