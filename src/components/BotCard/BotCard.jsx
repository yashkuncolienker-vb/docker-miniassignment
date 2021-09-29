import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './BotCard.css';

const BotCard = ({ bot }) => {
  const dispatch = useDispatch();
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
        <button onClick={() => dispatch({ type: 'buy', payload: bot.id })}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default BotCard;
