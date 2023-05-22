import Head from 'next/head'
import { getMovies } from '@/lib/moviedb'
import type { MovieList } from '../../types';

export const getServerSideProps = async () => {
	const movies = await getMovies();

	return {
		props: {
			movies
		}
	}
}

type Props = {
	movies: MovieList;
}

export default function NowPlaying({movies}: Props) {
	return (
		<>
			<Head>
				<title>Movie App - Now Playing</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				
			</main>
		</>
	)
}
