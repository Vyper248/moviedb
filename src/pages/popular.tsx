import Head from 'next/head'
import { getMovies } from '@/lib/moviedb'
import type { Movies } from '../../types';

import MovieList from '@/components/MovieList/MovieList';

export const getServerSideProps = async () => {
	const movies = await getMovies('popular');

	return {
		props: {
			movies
		}
	}
}

type Props = {
	movies: Movies;
}

export default function Popular({movies}: Props) {
	return (
		<>
			<Head>
				<title>Movie App - Popular</title>
				<meta name="description" content="Popualar Movies" />
			</Head>
			<main>
				<MovieList movies={movies}/>
			</main>
		</>
	)
}
