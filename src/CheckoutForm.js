import { useState } from "react";
export default function CheckoutForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ name, email });
        setName("");
        setEmail("");
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <h3>Checkout</h3>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="checkout-btn">
                Submit Order
            </button>
        </form>
    );
}