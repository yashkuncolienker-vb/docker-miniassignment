import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav>
      <h1>Dashboard</h1>
      <h2>Cart - {cart.count}</h2>
    </nav>
  );
};

export default Navbar;
