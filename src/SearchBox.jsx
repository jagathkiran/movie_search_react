import { Search } from "lucide-react";
function SearchBox() {
	function handleSubmit() {
		const userInput = document.getElementById("movie-search-form").value;
		console.log(userInput);
	}

	function handleSearch(e) {
		e.preventDefault();
	}

	return (
		<form className="movie-search-form" onSubmit={handleSearch}>
			<input
				type="text"
				id="movie-search-form"
				placeholder="Enter movie name"
				required
			/>
			<button type="submit" onClick={handleSubmit}>
				<Search size={15} />
			</button>
		</form>
	);
}

export default SearchBox;
