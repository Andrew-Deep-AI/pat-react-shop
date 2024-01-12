/* eslint-disable react/prop-types */
import ProductList from "./ProductList";

const MainContent = ({ productsData }) => {
	return (
		<>
			<main className="main-content">
				<h1>Products</h1>
				<ProductList productsData={productsData} />
			</main>
		</>
	);
};

export default MainContent;
