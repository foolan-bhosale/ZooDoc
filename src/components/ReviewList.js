import React, { useState, useEffect } from 'react';
import { APIURL } from '../config';
import {
	Card,
	ListGroup,
	ListGroupItem,
	Accordion,
	Button,
	CardDeck,
} from 'react-bootstrap';

function ReviewList(props) {
	console.log(props);
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		const url = `${APIURL}/reviews`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
        console.log(response)
				setReviews(response);
			})
			.catch(console.error);
  }, []);
  // if (!reviews) return null;
  console.log(reviews)
	return (
			<div className='review'>
				{reviews.map((review) => {
					return (
						<Card style={{ width: '18rem' }}>
							<Card.Body>
								<Card.Title>Review:</Card.Title>
								<Card.Text>Posted by: {review.name}</Card.Text>
								<Card.Text>description: {review.description}</Card.Text>
								<Card.Text>overall: {review.overall_rating}</Card.Text>
								<Card.Text>bedside: {review.bed_side_rating}</Card.Text>
								<Card.Text>wait time: {review.wait_time_rating}</Card.Text>
								<Card.Text>post created at: {review.created_at}</Card.Text>
								<Card.Link href='#'>Edit</Card.Link>
								<Card.Link href='#'>Delete</Card.Link>
							</Card.Body>
						</Card>
					);
				})}
			</div>
	);
}
export default ReviewList;
