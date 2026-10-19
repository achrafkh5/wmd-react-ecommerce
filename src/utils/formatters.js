export function formatPrice(price) {
  return new Intl.NumberFormat('fr-DZ', {
    style: 'currency',
    currency: 'DZD'
  }).format(price);
}

export function calculateCartTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function calculateTotalCount(items) {
  return items.reduce((count, item) => count + item.quantity, 0);
}
