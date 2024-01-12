/* eslint-disable react/prop-types */
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function CartPage({
	cartList,
	cartCount,
	handleRemoveProduct,
	handleAddQuantity,
	handleRemoveQuantity,
}) {
	return (
		<>
			<Header cartCount={cartCount} />
			<Cart
				cartList={cartList}
				cartCount={cartCount}
				handleRemoveProduct={handleRemoveProduct}
				handleAddQuantity={handleAddQuantity}
				handleRemoveQuantity={handleRemoveQuantity}
			/>
			<Footer />
		</>
	);
}
