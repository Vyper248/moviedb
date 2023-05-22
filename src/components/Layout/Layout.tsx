import { ReactNode, useState } from "react";
import { useRouter } from "next/router";

import { Header, Menu, Input, Button } from "semantic-ui-react";

type LayoutProps = {
	children: ReactNode | ReactNode[];
}

const Layout = ({children}: LayoutProps) => {
	const [search, setSearch] = useState('');
	const router = useRouter();

	const onSearch = () => {
		router.push(`/search/${search}`);
	}

	return (
		<div>
			<Header size='huge' textAlign="center" style={{marginTop: '10px'}}>Movie App</Header>
			<Menu>
				<Menu.Item name='Now Playing' active={router.pathname === '/nowPlaying'} onClick={() => router.push('/nowPlaying')}/>
				<Menu.Item name='Popular' active={router.pathname === '/popular'} onClick={() => router.push('/popular')}/>
				<Menu.Item name='Top Rated' active={router.pathname === '/topRated'} onClick={() => router.push('/topRated')}/>
				<Menu.Item name='Upcoming' active={router.pathname === '/upcoming'} onClick={() => router.push('/upcoming')}/>
				<Menu.Menu position='right'>
					<Menu.Item>
						<Input placeholder='Search...' onChange={(e) => setSearch(e.target.value)} action>
							<input/>
							<Button icon='search' onClick={onSearch}/>
						</Input>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
			{ children }
		</div>
	);
}

export default Layout;
