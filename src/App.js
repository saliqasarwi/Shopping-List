import ProductList from "./ProductList";
import "./App.css";

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

export default function App() {
  return (
    <div className="app">
      <h1>Products List</h1>

      <div className="container">
        <section className="products">
          <h2>Our Products</h2>
          <ProductList products={products} />
        </section>
        <aside className="sidebar">
          <h2>Cart</h2>
          <p>Your cart is empty</p>
        </aside>
      </div>
    </div>
  );
}