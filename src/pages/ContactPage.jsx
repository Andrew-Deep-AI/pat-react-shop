import Footer from "../components/Footer";
import Header from "../components/Header";
import "./ContactPage.css";

export default function ContactPage() {
	return (
		<>
			<Header />
			<p className="main-content">
				<div className="contact-container">
					<h1>Contact Us</h1>
					<form className="contact-form">
						<label htmlFor="name">Name:</label>
						<input type="text" id="name" name="name" required />

						<label htmlFor="email">Email:</label>
						<input type="email" id="email" name="email" required />

						<label htmlFor="message">Message:</label>
						<textarea id="message" name="message" required></textarea>

						<button type="submit">Send Message</button>
					</form>
				</div>
			</p>
			<Footer />
		</>
	);
}
