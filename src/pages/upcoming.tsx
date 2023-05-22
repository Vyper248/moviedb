import Head from 'next/head'
import { getMovies } from '@/lib/moviedb'
import type { Movies } from '../../types';

import MovieList from '@/components/MovieList/MovieList';

export const getServerSideProps = async () => {
	const movies = await getMovies('upcoming');

	return {
		props: {
			movies
		}
	}
}

type Props = {
	movies: Movies;
}

export default function Upcoming({movies}: Props) {
	return (
		<>
			<Head>
				<title>Movie App - Upcoming</title>
				<meta name="description" content="Upcoming Movies" />
			</Head>
			<main>
				<MovieList movies={movies}/>
			</main>
		</>
	)
}
