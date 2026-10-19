import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import CartItem from './CartItem';
import { calculateCartTotal, calculateTotalCount, formatPrice } from '../utils/formatters';

export default function Cart({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalCount = calculateTotalCount(items);
  const totalPrice = calculateCartTotal(items);

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart ({totalCount})</h2>
          <button className="cart-close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <span className="cart-empty-icon">🛒</span>
              <p className="cart-empty-text">Your cart is currently empty</p>
              <button className="btn-continue-shopping" onClick={onClose}>
                Browse Products
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span className="cart-total-amount">{formatPrice(totalPrice)}</span>
            </div>
            <div className="cart-actions">
              <button 
                className="btn-clear-cart"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
              <button 
                className="btn-checkout"
                onClick={() => alert('Order placed successfully! Thank you for shopping at DzTech.')}
              >
                Checkout Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
