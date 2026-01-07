import MovieCard from "./MovieCard.jsx";

function MovieList({ items }) {
	return (
		<>
			{items.map((movie) => (
				<MovieCard key={movie.imdbId} movie={movie}></MovieCard>
			))}
		</>
	);
}

export default MovieList;
