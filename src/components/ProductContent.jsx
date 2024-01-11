import { useParams } from "react-router-dom";
import productsJson from "/data/products.json";
import "./ProductContent.css";

export default function ProductContent() {
	const { productId } = useParams(); // This hook allows you to grab the productId from the URL

	// Fetch product details from an API or state management using the productId
	// ...

	const productsData = productsJson.products;
	const product = productsData.find((product) => product.id === +productId);

	return (
		<div className="main-content">
			<div className="product-content">
				<h1>{product.name}</h1>
				<img src={product.photo} alt={product.name} />
				<h3>Product Details</h3>
				<p className="product-description">{product.description}</p>
				<p className="price">${product.price}</p>
				<button className="product-button">Add to Cart</button>
			</div>
		</div>
	);
}
