import { useState } from 'react';
import Head from 'next/head'
import { Image, Item, Container, Card, Header, Button, Divider, Tab } from 'semantic-ui-react';

import { getMovie } from '@/lib/moviedb'

import ActorList from '@/components/ActorList/ActorList';
import ImageList from '@/components/ImageList/ImageList';

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
                            <Item.Image size='large' src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}/>
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
                    <Divider/>

                    <Header textAlign='center'>Reviews</Header>
                    
                </Container>
			</main>
		</>
	)
}
