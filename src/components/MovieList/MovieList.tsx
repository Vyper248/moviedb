import { Movie, Movies } from "../../../types";

import { Card } from "semantic-ui-react";

import MovieLink from "../Movie/MovieLink";
import { useState } from "react";

type MovieListProps = {
	movies: Movies;
}

const MovieList = ({movies}: MovieListProps) => {	
	return (
		<Card.Group centered stackable doubling>
		{
			movies.results.map(movie => <MovieLink key={movie.id} movie={movie}/>)
		}
		</Card.Group>
	);
}

export default MovieList;
