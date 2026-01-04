function MovieCard() {
	const movie = {
		Title: "Dune",
		Year: "1984",
		Rated: "PG-13",
		Released: "14 Dec 1984",
		Runtime: "137 min",
		Genre: "Action, Adventure, Sci-Fi",
		Director: "David Lynch",
		Writer: "Frank Herbert, David Lynch",
		Actors: "Kyle MacLachlan, Virginia Madsen, Francesca Annis",
		Plot: "A Duke's son leads desert warriors against the galactic emperor and his father's evil nemesis to free their desert world from the emperor's rule.",
		Language: "English",
		Country: "United States, Mexico",
		Awards: "Nominated for 1 Oscar. 2 wins & 7 nominations total",
		Poster: "https://m.media-amazon.com/images/M/MV5BMGJlMGM3NDAtOWNhMy00MWExLWI2MzEtMDQ0ZDIzZDY5ZmQ2XkEyXkFqcGc@._V1_SX300.jpg",
		Ratings: [
			{ Source: "Internet Movie Database", Value: "6.3/10" },
			{ Source: "Rotten Tomatoes", Value: "36%" },
			{ Source: "Metacritic", Value: "41/100" },
		],
		Metascore: "41",
		imdbRating: "6.3",
		imdbVotes: "191,067",
		imdbID: "tt0087182",
		Type: "movie",
		DVD: "N/A",
		BoxOffice: "$31,439,560",
		Production: "N/A",
		Website: "N/A",
		Response: "True",
	};
	return (
		<div className="movie-card">
			<img
				src={movie.Poster}
				alt={`${movie.Title} (${movie.Year})`}
				className="movie-poster"
			></img>
			<div className="movie-title">
				<h3>{`${movie.Title} (${movie.Year})`}</h3>
			</div>
			<p className="movie-plot">{movie.Plot}</p>
		</div>
	);
}

export default MovieCard;
