export default function ProductList({ products, onAddToCart }) {
    return (
        <div className="grid">
            {products.map((product) => (
                <div key={product.id} className="card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p className="price">${product.price.toFixed(2)}</p>
                    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}