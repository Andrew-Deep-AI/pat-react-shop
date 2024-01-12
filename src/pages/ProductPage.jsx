/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductContent from "../components/ProductContent";

export default function ProductPage({
	productsData,
	handleAddProduct,
	cartCount,
}) {
	return (
		<>
			<Header cartCount={cartCount} />
			<ProductContent
				productsData={productsData}
				handleAddProduct={handleAddProduct}
			/>
			<Footer />
		</>
	);
}
