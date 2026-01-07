import MovieCard from "./MovieCard.jsx";

function MovieList({ items, searchItem }) {
	if (!searchItem) {
		return (
			<div className="movie-list">
				<p>Start by typing in the movie name</p>
			</div>
		);
	} else if (items.length === 0) {
		return (
			<div>
				<p>No movie found with name {searchItem}</p>
			</div>
		);
	} else {
		return (
			<div>
				{items.map((movie) => (
					<MovieCard key={movie.imdbID} movie={movie}></MovieCard>
				))}
			</div>
		);
	}
}

export default MovieList;
