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
		console.log(props.userToken);
		const url = `${APIURL}/reviews/${event.target.id}`;
		fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
				'Authorization': `Bearer ${props.userToken}`,
			},
		})
			.then((res) => {
				console.log(res);
				setDeleted(true);
			})
			.catch(console.error);
	};
	if (deleted) {
		return <Redirect to={`/doctors/${props.doctorCity}`} />;
		// {`/doctor/${props.doctorId}`}
	}

	
	// if (!reviews) return null;
	console.log(reviews);
	return (
		<div>
			<Container fluid className='container-fluid d-flex justify-content-center'>
				<Row>
					{filteredReview.map((review) => {
						return (
							<Col  lg={true}className='m-3 col-md-3  col-sm-10' key={review.id}>
								<Card
									style={{ width: '18rem' }}
									className=' h-100 review-card '>
									<Card.Body>
										<Card.Title>Review:</Card.Title>
										<Card.Text>Posted by: {review.name}</Card.Text>
										<Card.Text>{review.description}</Card.Text>
										<Card.Text>Overall Experience: {review.overall_rating}</Card.Text>
										<Card.Text>Bedside Manner: {review.bed_side_rating}</Card.Text>
										<Card.Text>Wait Time: {review.wait_time_rating}</Card.Text>
										<Card.Text>Created:{review.created_at}</Card.Text>
										<Card.Link>
											<Link to='/editreview'><button id={review.id}>Edit</button></Link>
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
