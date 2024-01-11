import "./Cart.css";

const Cart = () => {
	return (
		<>
			<main className="main-content">
				<div className="cart-content">
					<h1>Cart</h1>

					<div className="cart-items">
						<div className="cart-item">
							<p>Image</p>
							<p>Product Name</p>
							<p>Quantity: 1</p>
							<p>Price: $100</p>
							<button className="delete-item">Delete</button>
						</div>
					</div>

					<div className="cart-total"> Total Price 100$ </div>

					<button className="checkout-button">Checkout</button>
				</div>
			</main>
		</>
	);
};

export default Cart;
