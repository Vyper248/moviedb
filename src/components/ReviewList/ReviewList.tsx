import { Comment } from "semantic-ui-react";
import ReviewDisplay from "../ReviewDisplay/ReviewDisplay";

import type { Review } from "../../../types";

type ReviewListProps = {
	reviews: {
		page: number;
		results: Review[];
	};
}

const ReviewList = ({reviews}: ReviewListProps) => {
	return (
		<Comment.Group style={{maxWidth: '100%'}}>
		{
			reviews.results.map(review => <ReviewDisplay review={review}/>)
		}
		</Comment.Group>
	);
}

export default ReviewList;
