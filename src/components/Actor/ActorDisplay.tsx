import { Card, Image, Placeholder } from "semantic-ui-react";

import type { Actor } from "../../../types";

type ActorProps = {
	actor: Actor;
}

const ActorDisplay = ({actor}: ActorProps) => {
	return (
		<Card>
			{ actor.profile_path !== null 
				? <Image src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} wrapped centered alt='profile'/>
				: <div style={{height: '197px', backgroundColor: '#EEE'}}/>
			}
			<Card.Content>
				<Card.Header>{actor.name}</Card.Header>
				<Card.Meta>{actor.character}</Card.Meta>
			</Card.Content>
		</Card>
	);
}

export default ActorDisplay;
