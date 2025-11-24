import { useLayoutEffect, useReducer } from "react";
import ProductList from "./ProductList";
import "./App.css";
import Cart from "./Cart"
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    image: "https://m.media-amazon.com/images/I/61YQeAUIboL._AC_UY218_.jpg",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 89.99,
    image: "https://m.media-amazon.com/images/I/71-OuRhiE3L._AC_UY218_.jpg",
  },
  {
    id: 3,
    name: "USB-C Hub",
    price: 45.0,
    image: "https://m.media-amazon.com/images/I/719tlAYy1kL._AC_UY218_.jpg",
  },
  {
    id: 4,
    name: "Webcam",
    price: 69.99,
    image: "https://m.media-amazon.com/images/I/51EPhWPDRhL._AC_UY218_.jpg",
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 39.99,
    image: "https://m.media-amazon.com/images/I/71NTXKxY8hL._AC_UY218_.jpg",
  },
  {
    id: 6,
    name: "Headphones",
    price: 199.99,
    image: "https://m.media-amazon.com/images/I/610DB8Cwm7L._AC_UY218_.jpg",
  },
];
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    default:
      return state;
  }
}
export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  function addToCart(product) {
    dispatch({
      type: "ADD_ITEM",
      payload: product
    });
  }
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="app">
      <h1>Products List</h1>

      <div className="container">
        <section className="products">
          <h2>Our Products</h2>
          <ProductList products={products} onAddToCart={addToCart} />
        </section>
        <aside className="sidebar">
          <h2>Cart({totalItems + " "}items)</h2>
          {
            cart.length === 0 ? <p>Your cart is empty</p> :
              <Cart cart={cart}></Cart>
          }
        </aside>
      </div>
    </div>
  );
}