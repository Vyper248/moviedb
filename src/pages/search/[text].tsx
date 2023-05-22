import Head from 'next/head'
import type { GetServerSideProps } from 'next';
import { searchMovies } from '@/lib/moviedb'
import type { Movies } from '../../../types';

import MovieList from '@/components/MovieList/MovieList';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const movies = await searchMovies(context.params?.text as string);

	return {
		props: {
			movies
		}
	}
}

type Props = {
	movies: Movies;
}

export default function Search({movies}: Props) {
	return (
		<>
			<Head>
				<title>Movie App - Search</title>
				<meta name="description" content="Searched Movies" />
			</Head>
			<main>
				<MovieList movies={movies.results}/>
			</main>
		</>
	)
}
