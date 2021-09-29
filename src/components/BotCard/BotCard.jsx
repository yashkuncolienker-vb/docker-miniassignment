import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './BotCard.css';

const BotCard = ({ bot }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const incart = cart.incart;
  const elementInCart = incart.length && incart.includes(bot.id);
  const botsInCart_count = incart.filter((id) => {
    return id === bot.id;
  }).length;
  return (
    <div className="card">
      <h4>{bot.bot}</h4>
      <div className="findata-container">
        <div>
          <h5>Index Value</h5>
          <p>{bot.index_value}</p>
        </div>
        <div>
          <h5>CAGR</h5>
          <p>{bot.cagr}%</p>
        </div>
      </div>
      <div className="btn-container">
        <Link to={`/bots-details/${bot.id}`}>
          <button>View Algo</button>
        </Link>
        {!elementInCart ? (
          <button
            onClick={() => dispatch({ type: 'addToCart', payload: bot.id })}
          >
            Buy
          </button>
        ) : (
          <div className="cart-add-minus">
            <button
              onClick={() => dispatch({ type: 'addToCart', payload: bot.id })}
            >
              +
            </button>
            <div>{botsInCart_count}</div>
            <button
              onClick={() =>
                dispatch({ type: 'dropFromCart', payload: bot.id })
              }
            >
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BotCard;
