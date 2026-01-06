import SearchBox from "./SearchBox.jsx";

function Header() {
	return (
		<header>
			<div className="header">
				<h1>Movie Search</h1>
				<SearchBox></SearchBox>
			</div>
			<hr />
		</header>
	);
}

export default Header;
