import { Search } from "lucide-react";
function SearchBox() {
	return (
		<form className="movie-form">
			{/* <label for="movie">Enter movie name: </label> */}
			<input
				type="text"
				name="movie"
				placeholder="Enter movie name"
				required
			/>{" "}
			{/* <br /> */}
			<button type="submit">
				<Search size={10} />
			</button>
		</form>
	);
}

export default SearchBox;
