import { Movie } from "../../../types";
import { useRouter } from "next/router";

import { Card, Image, Icon } from "semantic-ui-react";

type MovieProps = {
	movie: Movie;
}

const Movie = ({movie}: MovieProps) => {
	const router = useRouter();

	const onClickMovie = () => {
		router.push(`/movie/${movie.id}`);
	}

	return (
		<Card onClick={onClickMovie}>
			<Image src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} wrapped/>
			<Card.Content>
				<Card.Header>{movie.title}</Card.Header>
				<Card.Meta>
					<span>Release Date: {movie.release_date}</span>
				</Card.Meta>
			</Card.Content>
			<Card.Content extra>
				<span>
					<Icon name='star'/> {movie.vote_average}
				</span>
			</Card.Content>
		</Card>
	);
}

export default Movie;
