import { useState } from "react";
import { Card, Button } from "semantic-ui-react";

import ActorDisplay from "../Actor/ActorDisplay";

import type { Actor } from "../../../types";

type ActorListProps = {
	actors: Actor[];
}

const ActorList = ({actors}: ActorListProps) => {
	const [showAllCast, setShowAllCast] = useState(false);
    let topCast = actors.length > 8 ? actors.slice(0,8) : actors;

	return (
		<>
			<Card.Group itemsPerRow={8} centered doubling>
			{
				showAllCast 
					? actors.map(actor => <ActorDisplay actor={actor}/>)
					: topCast.map(actor => <ActorDisplay actor={actor}/>)
			}
			</Card.Group>
			<div style={{textAlign: 'center'}}>
			{
				actors.length > 8 && (
					<>
						<br/>
						{
							showAllCast 
								? <Button onClick={() => setShowAllCast(false)}>Hide</Button>
								: <Button onClick={() => setShowAllCast(true)}>Show All</Button>
						}
					</>
				)
			}
			</div>
		</>
	);
}

export default ActorList;
