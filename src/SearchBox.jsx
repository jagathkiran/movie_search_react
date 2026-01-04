function SearchBox() {
	return (

		<form>
			<label for="movie">Enter movie name: </label>
			<input type="text" name="movie" placeholder="eg. Dune" required /> <br />
			<input type="submit" name="submit" value="Submit" />
		</form>
	);
}

export default SearchBox;
