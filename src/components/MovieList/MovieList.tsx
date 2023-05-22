import { Movie } from "../../../types";

import { Card } from "semantic-ui-react";

import MovieLink from "../Movie/MovieLink";

type MovieListProps = {
	movies: Movie[];
}

const MovieList = ({movies}: MovieListProps) => {
	return (
		<Card.Group centered stackable doubling>
		{
			movies.map(movie => <MovieLink movie={movie}/>)
		}
		</Card.Group>
	);
}

export default MovieList;
