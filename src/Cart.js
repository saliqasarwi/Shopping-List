export default function Cart({cart,onRemove}) {
    
    return (
        <div className="cart">
            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <span>
                                    {item.name} × {item.quantity}
                                </span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                              <button className="remove-btn" onClick={()=>onRemove(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                  
                </>
            )}
        </div>
    );
}
