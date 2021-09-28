import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';

const BotCard = ({ bot }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(actionCreators, dispatch);
  console.log(state);
  return (
    <div>
      <ul>
        <li>{bot.bot}</li>
        <li>{bot.cagr}</li>
        <li>{bot.index_value}</li>
      </ul>
      <button onClick={() => addToCart(bot.id)}>Buy</button>
    </div>
  );
};

export default BotCard;
