import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MovieList from "./MovieList.jsx";

function App() {
	const [userInput, setUserInput] = useState("Dune");
	const [movies, setMovies] = useState([
		{
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
		},
		{
			Title: "Tron",
			Year: "1982",
			Rated: "PG",
			Released: "09 Jul 1982",
			Runtime: "96 min",
			Genre: "Action, Adventure, Sci-Fi",
			Director: "Steven Lisberger",
			Writer: "Steven Lisberger, Bonnie MacBird",
			Actors: "Jeff Bridges, Bruce Boxleitner, David Warner",
			Plot: "A computer hacker is abducted into a digital world and forced to participate in gladiatorial games where his only chance of escape is with the help of a heroic security program.",
			Language: "English",
			Country: "United States, Taiwan, Japan, United Kingdom",
			Awards: "Nominated for 2 Oscars. 2 wins & 8 nominations total",
			Poster: "https://m.media-amazon.com/images/M/MV5BMTA4Y2VjOWEtMWQ5MS00YWU5LTkxZTMtNzVmMDYyNWFiODU5XkEyXkFqcGc@._V1_SX300.jpg",
			Ratings: [
				{ Source: "Internet Movie Database", Value: "6.7/10" },
				{ Source: "Rotten Tomatoes", Value: "60%" },
				{ Source: "Metacritic", Value: "58/100" },
			],
			Metascore: "58",
			imdbRating: "6.7",
			imdbVotes: "143,378",
			imdbID: "tt0084827",
			Type: "movie",
			DVD: "N/A",
			BoxOffice: "$33,000,000",
			Production: "N/A",
			Website: "N/A",
			Response: "True",
		},
	]);

	const updateUserInput = () => {
		setUserInput("");
	};

	const updateMovies = () => {
		setMovies([]);
	};

	return (
		<div className="app-container">
			<Header></Header>
			<MovieList items={movies} searchItem={userInput}></MovieList>
			<Footer></Footer>
		</div>
	);
}

export default App;
