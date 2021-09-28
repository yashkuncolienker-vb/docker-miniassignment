import BotCard from '../../components/BotCard/BotCard';
import { useSelector } from 'react-redux';

const Bots = () => {
  const state = useSelector((state) => state);
  return (
    <div>
      {state.cart.count}
      <h1>
        {state.bots.map((bot, key) => (
          <BotCard key={key} bot={bot} />
        ))}
      </h1>
    </div>
  );
};

export default Bots;
