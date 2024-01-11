import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-links">
						<a href="/terms-of-service">Terms of Service</a>
						<a href="/privacy-policy">Privacy Policy</a>
					</div>
				</div>
				<div className="footer-bottom">
					<p>
						&copy; {new Date().getFullYear()} Your Company Name. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
