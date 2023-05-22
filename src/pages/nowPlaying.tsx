import Head from 'next/head'
import { getMovies } from '@/lib/moviedb'
import type { Movies } from '../../types';

import MovieList from '@/components/MovieList/MovieList';

export const getServerSideProps = async () => {
	const movies = await getMovies();

	return {
		props: {
			movies
		}
	}
}

type Props = {
	movies: Movies;
}

export default function NowPlaying({movies}: Props) {
	return (
		<>
			<Head>
				<title>Movie App - Now Playing</title>
				<meta name="description" content="Now playing" />
			</Head>
			<main>
				<MovieList movies={movies.results}/>
			</main>
		</>
	)
}
