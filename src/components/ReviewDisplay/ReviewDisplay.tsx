import { useState } from "react";
import { Comment, Icon } from "semantic-ui-react";

import type { Review } from "../../../types";

type ReviewDisplayProps = {
	review: Review;
}

const ReviewDisplay = ({review}: ReviewDisplayProps) => {
	const [viewMore, setViewMore] = useState(false);

	const smallContent = review.content.slice(0,350) + '...';
	const avatar = review.author_details.avatar_path || '';

	let avatarSrc = avatar.includes('http') ? avatar.replace('/','') : `https://image.tmdb.org/t/p/w185${avatar}`;

	return (
		<Comment>
			{ avatar.length > 0 
				? <Comment.Avatar src={avatarSrc}/>
				: <Comment.Avatar/>
			}
			<Comment.Content>
				<Comment.Author>{review.author_details.username}</Comment.Author>
				<Comment.Metadata style={{marginLeft: '0px'}}><div>Created at {review.created_at}</div></Comment.Metadata>
				<Comment.Text dangerouslySetInnerHTML={{__html: viewMore ? review.content : smallContent}}></Comment.Text>
				<Comment.Actions>
				{
					viewMore 
						? <Comment.Action onClick={() => setViewMore(false)}>View Less</Comment.Action>
						: <Comment.Action onClick={() => setViewMore(true)}>View More</Comment.Action>
				}
				</Comment.Actions>
			</Comment.Content>
		</Comment>
	);
}

export default ReviewDisplay;
