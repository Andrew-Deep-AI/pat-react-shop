/* eslint-disable react/prop-types */
import "./AboutPage.css";

import Footer from "../components/Footer";
import Header from "../components/Header";

import OurStoryImage from "../assets/our-story.avif";
import OurMissionImage from "../assets/our-mission.avif";
import OurValuesImage from "../assets/our-values.avif";
import MeetTheTeamImage from "../assets/meet-the-team.avif";

export default function AboutPage({ cartCount }) {
	return (
		<>
			<Header cartCount={cartCount} />
			<div className="main-content">
				<div className="about-content">
					<h1>About Us</h1>
					<section className="about-section">
						<img src={OurStoryImage} alt="Our Story" className="about-image" />
						<h2>Our Story</h2>
						<p>
							Welcome to Pat`s React Shop! We started our journey in 2010 with
							the mission to provide high-quality products and exceptional
							customer service. Our shop has grown over the years, but our core
							values remain the same.
						</p>
					</section>
					<section className="about-section">
						<img
							src={OurMissionImage}
							alt="Our Mission"
							className="about-image"
						/>
						<h2>Our Mission</h2>
						<p>
							Our mission is to deliver an outstanding shopping experience and
							offer our customers the best selection of products. We are
							committed to ensuring that you find exactly what you`re looking
							for every time you visit us.
						</p>
					</section>
					<section className="about-section">
						<img
							src={OurValuesImage}
							alt="Our Values"
							className="about-image"
						/>
						<h2>Our Values</h2>
						<ul>
							<li>
								Customer Satisfaction: We put our customers first and strive to
								meet their needs.
							</li>
							<li>
								Quality: We ensure that all our products meet high standards of
								quality.
							</li>
							<li>
								Integrity: We conduct our business with honesty and
								transparency.
							</li>
							<li>
								Innovation: We continuously seek to improve and innovate in all
								aspects of our business.
							</li>
						</ul>
					</section>
					<section className="about-section">
						<img
							src={MeetTheTeamImage}
							alt="Meet the Team"
							className="about-image"
						/>
						<h2>Meet the Team</h2>
						<p>
							Our dedicated team is the backbone of our shop. Each member brings
							unique skills and a passion for customer service, making sure that
							your experience with us is nothing short of excellent.
						</p>
					</section>
				</div>
			</div>
			<Footer />
		</>
	);
}
