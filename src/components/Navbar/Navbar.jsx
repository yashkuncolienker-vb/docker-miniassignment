import './Navbar.css';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav>
      <h1>Dashboard</h1>
      <h2>Cart - {cart.count}</h2>
      <button>
        <FontAwesomeIcon
          size="2x"
          className="cart-icon"
          icon={faShoppingCart}
        />
      </button>
    </nav>
  );
};

export default Navbar;
