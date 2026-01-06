import { Search } from "lucide-react";
function SearchBox() {
	return (
		<form className="movie-search-form">
			<input type="text" placeholder="Enter movie name" required />
			<button type="submit">
				<Search size={15} />
			</button>
		</form>
	);
}

export default SearchBox;
