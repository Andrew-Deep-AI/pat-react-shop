/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Header.css";
import ShoppingCartButton from "./ShoppingCartButton";

const Header = ({ cartCount, handleSearchChange, searchQuery }) => {
	return (
		<header className="header">
			<div className="logo">
				<img src="/public/vite.svg" alt="Logo" />
			</div>
			<nav className="navigation">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<ShoppingCartButton cartCount={cartCount} />
			<div className="search">
				<input
					type="text"
					placeholder="Search..."
					value={searchQuery}
					onChange={handleSearchChange}
				/>
			</div>
		</header>
	);
};

export default Header;
