# DzTech Store - React & Redux E-Commerce Application

## Student Information
* **Student Name:** KHOUALDI Mohamed Achraf
* **Institution:** École Nationale Supérieure de Technologies Avancées (ENSTA)
* **Class:** SS G2
* **Module:** Web and Mobile Development
* **Lab:** TP 2: Create a React Application with Redux for State Management

---

## Application / Store Name
**DzTech Store** — Online Electronics & Tech Gadgets Store

---

## Application Description
DzTech Store is an interactive e-commerce single-page application built with React and Redux. It allows users to browse through a catalog of consumer electronics (laptops, audio, smartphones, wearables, accessories), filter products by category, search in real-time, and manage a shopping cart. The application demonstrates component-based architecture and centralized global state management using Redux and React-Redux.

---

## Technologies Used
* **React.js (v19)**: Component-based user interface library
* **Redux Toolkit**: Efficient and standard Redux state management
* **React-Redux**: Connecting React components to the central Redux store
* **JavaScript (ES6+)**: Application logic and reusable utility functions
* **Vanilla CSS**: Custom styling, responsive layouts, and slide-in drawer animations
* **Vite**: Modern frontend build tool and development server

---

## Main React Components
* **`App.jsx`**: Top-level component holding local UI state (search query, selected category filter, cart open/closed state) and composing layout sections.
* **`Navbar.jsx`**: Reusable navigation header featuring the store brand, real-time search input, and a cart button with a dynamic item counter badge.
* **`CategoryFilter.jsx`**: Reusable filter bar allowing users to filter products by category.
* **`ProductList.jsx`**: Reusable catalog grid displaying available products or an empty state message.
* **`ProductCard.jsx`**: Reusable product card displaying image, category, rating, title, price, and an interactive "Add to Cart" button.
* **`Cart.jsx`**: Slide-over drawer displaying cart items, total item count, formatted subtotal price, clear cart button, and checkout action.
* **`CartItem.jsx`**: Reusable row component inside the cart providing quantity increment/decrement controls and item removal.

---

## Redux State Managed by the Application
Global state is managed by the Redux store configured in `src/redux/store.js` using `cartSlice.js`.

* **State Structure:**
  ```javascript
  {
    cart: {
      items: [
        {
          id: Number,
          name: String,
          category: String,
          price: Number,
          rating: Number,
          image: String,
          description: String,
          quantity: Number
        }
      ]
    }
  }
  ```
* **Actions & Reducers:**
  * `addToCart(product)`: Adds a new product to the cart or increments its quantity if already present.
  * `removeFromCart(id)`: Removes a product completely from the cart by its ID.
  * `increaseQuantity(id)`: Increments the item quantity by 1.
  * `decreaseQuantity(id)`: Decrements the item quantity by 1 (or removes it if quantity reaches 0).
  * `clearCart()`: Empties all items from the shopping cart.
