import React, { useState, useEffect } from 'react';
import { APIURL } from '../config';
import {
	Card,
	ListGroup,
	ListGroupItem,
	Accordion,
	Button,
	CardDeck,
	Row,
	Col,
	Container,
} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
function ReviewList(props) {
	console.log(props);
	const [reviews, setReviews] = useState([]);
	const [deleted, setDeleted] = useState(false);
	useEffect(() => {
		const url = `${APIURL}/reviews`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setReviews(response);
			})
			.catch(console.error);
	}, []);
	let filteredReview = reviews.filter(
		(review) => review.doctor_id === props.doctorId
	);

	const deleteComment = (event) => {
		console.log(event.target.id);
		const url = `${APIURL}/reviews/${event.target.id}`;
		fetch(url, { method: 'DELETE' })
			.then((res) => {
				console.log(res);
				setDeleted(true);
			})
			.catch(console.error);
	};
	if (deleted) {
		return <Redirect to={`/doctor/${props.doctorId}`} />;
		// {`/doctor/${props.doctorId}`}
	}

	
	// if (!reviews) return null;
	console.log(reviews);
	return (
		<div>
			<Container className='container-fluid d-flex justify-content-center '>
				<Row>
					{filteredReview.map((review) => {
						return (
							<Col sm={true} className='mr-3' key={review.id}>
								<Card
									style={{ width: '18rem' }}
									className='text-center h-100 review-card'>
									<Card.Body>
										<Card.Title>Review:</Card.Title>
										<Card.Text>Posted by: {review.name}</Card.Text>
										<Card.Text>description: {review.description}</Card.Text>
										<Card.Text>overall: {review.overall_rating}</Card.Text>
										<Card.Text>bedside: {review.bed_side_rating}</Card.Text>
										<Card.Text>wait time: {review.wait_time_rating}</Card.Text>
										<Card.Text>post created at: {review.created_at}</Card.Text>
										<Card.Link>
											<button id={review.id}>Edit</button>
										</Card.Link>
										<Card.Link onClick={deleteComment}>
											<button id={review.id}>Delete</button>
										</Card.Link>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
		
	);
}
export default ReviewList;
