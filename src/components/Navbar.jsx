import { useSelector } from 'react-redux';
import { calculateTotalCount } from '../utils/formatters';

export default function Navbar({ onOpenCart, searchTerm, onSearchChange }) {
  const items = useSelector(state => state.cart.items);
  const totalCount = calculateTotalCount(items);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="navbar-logo">⚡</span>
          <h1 className="navbar-title">DzTech Store</h1>
        </div>

        <div className="navbar-search">
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <button className="cart-badge-button" onClick={onOpenCart}>
          <span className="cart-icon">🛒</span>
          <span className="cart-label">Cart</span>
          {totalCount > 0 && <span className="cart-count-badge">{totalCount}</span>}
        </button>
      </div>
    </header>
  );
}
