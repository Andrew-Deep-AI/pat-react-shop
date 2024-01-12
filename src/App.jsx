import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

import productsJson from "/data/products.json";
import { useState } from "react";

const productsData = productsJson.products;

const productsDataCopy = productsData.slice();
function App() {
	const [searchQuery, setSearchQuery] = useState(""); //!!

	const [cart, setCart] = useState([]);

	const cartCount = cart.reduce((accumulator, productItem) => {
		return accumulator + productItem.quantity;
	}, 0);

	const handleAddProduct = (productId) => {
		const testCartId = cart.find((product) => product.id === +productId);
		// Find the product by ID
		// const productToAdd = productsData.find(
		const productToAdd = productsDataCopy.find(
			// const productToAdd = filteredProductsData.find(
			(product) => product.id === +productId
		);
		if (testCartId) {
			console.log("Already in cart");

			// Add quantity in product
			testCartId.quantity += 1;
			setCart([...cart]);
		} else {
			console.log("Not in cart");

			// Add the product to the cart array
			setCart([...cart, productToAdd]);
		}
	};

	const handleRemoveProduct = (productId) => {
		const testCartId = cart.find((product) => product.id === +productId);
		testCartId.quantity = 1;
		const updatedCart = cart.filter((product) => product.id !== productId);

		setCart(updatedCart);
	};

	const handleAddQuantity = (productId) => {
		const testCartId = cart.find((product) => product.id === +productId);

		console.log("AddQuantity!!!");

		testCartId.quantity += 1;
		setCart([...cart]);
	};

	const handleRemoveQuantity = (productId) => {
		const testCartId = cart.find((product) => product.id === +productId);

		console.log("RemoveQuantity!!!");

		if (testCartId.quantity > 1) {
			testCartId.quantity -= 1;
			setCart([...cart]);
		} else {
			handleRemoveProduct(productId);
		}
	};

	const handleSearchChange = (event) => {
		//!!
		setSearchQuery(event.target.value);
	};

	// const filteredProductsData = productsData.filter((product) => {
	const filteredProductsData = productsDataCopy.filter((product) => {
		//!!
		return product.name.toLowerCase().includes(searchQuery.toLowerCase());
	});

	return (
		<Router>
			<div className="app-content">
				<Routes>
					<Route
						path="/"
						element={
							<HomePage
								productsData={filteredProductsData}
								cartCount={cartCount}
								handleSearchChange={handleSearchChange} //!!
								searchQuery={searchQuery} //!!
							/>
						}
					/>
					<Route path="/about" element={<AboutPage cartCount={cartCount} />} />
					<Route
						path="/contact"
						element={<ContactPage cartCount={cartCount} />}
					/>
					<Route
						path="/product/:productId"
						element={
							<ProductPage
								productsData={productsDataCopy}
								handleAddProduct={handleAddProduct}
								cartCount={cartCount}
							/>
						}
					/>
					<Route
						path="/cart"
						element={
							<CartPage
								cartList={cart}
								cartCount={cartCount}
								handleRemoveProduct={handleRemoveProduct}
								handleAddQuantity={handleAddQuantity}
								handleRemoveQuantity={handleRemoveQuantity}
							/>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
