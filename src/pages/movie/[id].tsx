import Head from 'next/head'
import { Item, Container, Header, Divider } from 'semantic-ui-react';

import { getMovie } from '@/lib/moviedb'

import ActorList from '@/components/ActorList/ActorList';
import ImageList from '@/components/ImageList/ImageList';
import ReviewList from '@/components/ReviewList/ReviewList';

import type { Movie } from '../../../types';
import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const movie = await getMovie(context.params?.id as string);

	return {
		props: {
			movie
		}
	}
}

type Props = {
	movie: Movie;
}

export default function Movie({movie}: Props) {
	return (
		<>
			<Head>
				<title>Movie App - {movie.title}</title>
				<meta name="description" content="Now playing" />
			</Head>
			<main>
                <Container>
                    <Item.Group>
                        <Item>
                            { movie.backdrop_path !== null 
                                ? <Item.Image src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} wrapped centered/>
                                : null
                            }
                            <Item.Content>
                                <Item.Header>{movie.title}</Item.Header>
                                <Item.Meta>Release Date: {movie.release_date}</Item.Meta>
                                <Item.Description>{movie.overview}</Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                    <Divider/>

                    <Header textAlign='center'>Cast</Header>
                    <ActorList actors={movie.credits.cast}/>
                    <Divider/>

                    <Header textAlign='center'>Images</Header>
                    <ImageList images={movie.images}/>

                    <Header textAlign='center'>Reviews</Header>
                    <ReviewList reviews={movie.reviews}/>
                </Container>
			</main>
		</>
	)
}
