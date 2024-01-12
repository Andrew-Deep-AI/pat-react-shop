/* eslint-disable react/prop-types */
import "./Cart.css";

const Cart = ({
	cartList,
	cartCount,
	handleRemoveProduct,
	handleAddQuantity,
	handleRemoveQuantity,
}) => {
	console.log(cartList);

	const totalPrice = cartList.reduce((accumulator, productItem) => {
		return accumulator + productItem.price * productItem.quantity;
	}, 0);

	return (
		<>
			<main className="main-content">
				<div className="cart-content">
					<h1>Cart</h1>
					{cartList.length ? (
						<ul className="cart-items">
							{cartList.map((product) => (
								<li key={product.id} className="cart-item">
									<img src={product.photo} alt={product.name} />
									<h3>{product.name}</h3>
									<p>
										Quantity:{" "}
										<button
											className="btn-quantity"
											onClick={() => handleRemoveQuantity(product.id)}
										>
											-
										</button>
										{product.quantity}
										<button
											className="btn-quantity"
											onClick={() => handleAddQuantity(product.id)}
										>
											+
										</button>
									</p>
									<p>Price: ${product.price * product.quantity}</p>
									<button
										className="delete-item"
										onClick={() => handleRemoveProduct(product.id)}
									>
										Delete
									</button>
								</li>
							))}
						</ul>
					) : (
						<h2>
							The cart is empty, please fill it with items!
							<br />
							<br />
						</h2>
					)}

					<div className="cart-quantity"> Total Quantity {cartCount} </div>
					<div className="cart-total"> Total Price {totalPrice}$ </div>

					<button className="checkout-button">Checkout</button>
				</div>
			</main>
		</>
	);
};

export default Cart;
