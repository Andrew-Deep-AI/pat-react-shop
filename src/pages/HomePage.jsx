/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import MainContent from "../components/Main-content";

export default function HomePage({
	productsData,
	cartCount,
	handleSearchChange,
	searchQuery,
}) {
	return (
		<>
			<MainHeader
				cartCount={cartCount}
				handleSearchChange={handleSearchChange}
				searchQuery={searchQuery}
			/>
			<MainContent productsData={productsData} />
			<Footer />
		</>
	);
}
