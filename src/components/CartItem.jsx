import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import { formatPrice } from '../utils/formatters';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-price">{formatPrice(item.price)}</p>
        <div className="cart-item-quantity-controls">
          <button 
            className="qty-btn"
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            -
          </button>
          <span className="qty-number">{item.quantity}</span>
          <button 
            className="qty-btn"
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-item-subtotal">
        <span className="cart-subtotal-text">{formatPrice(item.price * item.quantity)}</span>
        <button 
          className="btn-remove-item"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
