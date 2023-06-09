import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Header, Menu, Input, Button, Form } from "semantic-ui-react";
import Head from "next/head";

type LayoutProps = {
	children: ReactNode | ReactNode[];
}

const Layout = ({children}: LayoutProps) => {
	const [search, setSearch] = useState('');
	const router = useRouter();

	//when changing page, clear the search
	useEffect(() => {
		setSearch('');
	}, [router.pathname])

	const onSearch = () => {
		if (search.length > 0) router.push(`/search/${search}`);
	}

	const onHandleFormSubmit = () => {
		onSearch();
	}

	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header size='huge' textAlign="center" style={{marginTop: '10px'}}>Movie App</Header>
			<Menu>
				<Menu.Item name='Now Playing' active={router.pathname === '/nowPlaying'} onClick={() => router.push('/nowPlaying')}/>
				<Menu.Item name='Popular' active={router.pathname === '/popular'} onClick={() => router.push('/popular')}/>
				<Menu.Item name='Top Rated' active={router.pathname === '/topRated'} onClick={() => router.push('/topRated')}/>
				<Menu.Item name='Upcoming' active={router.pathname === '/upcoming'} onClick={() => router.push('/upcoming')}/>
				<Menu.Menu position='right'>
					<Menu.Item style={{padding: '6px 16px'}}>
						<Form onSubmit={onHandleFormSubmit}>
							<Form.Input size="small" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} action>
								<input/>
								<Button icon='search' onClick={onSearch}/>
							</Form.Input>
						</Form>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
			<br/>
			{ children }
			<br/>
			<br/>
			<br/>
			<br/>
		</div>
	);
}

export default Layout;
