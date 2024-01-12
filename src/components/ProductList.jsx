/* eslint-disable react/prop-types */
// import productsJson from "/data/products.json";
import "./ProductList.css";
import { Link } from "react-router-dom";

export default function ProductList({ productsData }) {
	// console.log(productsJson);
	// const productsData = productsJson.products;
	// console.log(productsData);

	return (
		<>
			<ul className="products-list">
				{productsData.map((product) => (
					<li key={product.id} className="product">
						<Link to={`/product/${product.id}`}>
							<img src={product.photo} alt={product.name} />
							<h3>{product.name}</h3>
							<p className="product-description">{product.description}</p>
							<p className="price">${product.price}</p>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
