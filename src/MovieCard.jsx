import PropTypes from "prop-types";

function MovieCard({ movie }) {
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

MovieCard.propTypes = {
	movie: PropTypes.shape({
		Title: PropTypes.string,
		Year: PropTypes.string,
		Rated: PropTypes.string,
		Released: PropTypes.string,
		Runtime: PropTypes.string,
		Genre: PropTypes.string,
		Director: PropTypes.string,
		Writer: PropTypes.string,
		Actors: PropTypes.string,
		Plot: PropTypes.string,
		Language: PropTypes.string,
		Country: PropTypes.string,
		Awards: PropTypes.string,
		Poster: PropTypes.string,
		Ratings: PropTypes.arrayOf(
			PropTypes.shape({
				Source: PropTypes.string,
				Value: PropTypes.string,
			}),
		),
		Metascore: PropTypes.string,
		imdbRating: PropTypes.string,
		imdbVotes: PropTypes.string,
		imdbID: PropTypes.string,
		Type: PropTypes.string,
		DVD: PropTypes.string,
		BoxOffice: PropTypes.string,
		Production: PropTypes.string,
		Website: PropTypes.string,
		Response: PropTypes.string,
	}).isRequired,
};

export default MovieCard;
