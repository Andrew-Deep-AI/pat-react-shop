import productsJson from "/data/products.json";
import "./ProductList.css";
import { Link } from "react-router-dom";

export default function ProductList() {
	// console.log(productsJson);
	const productsData = productsJson.products;
	// console.log(productsData);

	return (
		<>
			<div className="products-list">
				{productsData.map((product) => (
					<Link
						to={`/product/${product.id}`}
						key={product.id}
						className="product"
					>
						<img src={product.photo} alt={product.name} />
						<h3>{product.name}</h3>
						<p className="product-description">{product.description}</p>
						<p className="price">${product.price}</p>
					</Link>
				))}
			</div>
		</>
	);
}
