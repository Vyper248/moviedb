import Head from 'next/head'
import { getMovies } from '@/lib/moviedb'
import type { Movies } from '../../types';

import MovieList from '@/components/MovieList/MovieList';

export const getServerSideProps = async () => {
	const movies = await getMovies('top_rated');

	return {
		props: {
			movies
		}
	}
}

type Props = {
	movies: Movies;
}

export default function TopRated({movies}: Props) {
	return (
		<>
			<Head>
				<title>Movie App - Top Rated</title>
				<meta name="description" content="Top Rated Movies" />
			</Head>
			<main>
				<MovieList movies={movies.results}/>
			</main>
		</>
	)
}
