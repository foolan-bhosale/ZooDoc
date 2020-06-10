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
	Container
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
	let filteredReview = reviews.filter((review) => review.doctor_id === props.doctorId);

  // if (!reviews) return null;
  console.log(reviews)
	return (
			<div className='review'>
				{filteredReview.map((review) => {
					return (
						<Container className='container-fluid d-flex justify-content-center '>
							<Row>
								<Col
									sm={true}
									className='text-center col-lg-6 col-sm-12 '>
									<Card style={{ width: '18rem' }} className='single-review'>
										<Card.Body>
											<Card.Title>Review:</Card.Title>
											<Card.Text>Posted by: {review.name}</Card.Text>
											<Card.Text>description: {review.description}</Card.Text>
											<Card.Text>overall: {review.overall_rating}</Card.Text>
											<Card.Text>bedside: {review.bed_side_rating}</Card.Text>
											<Card.Text>
												wait time: {review.wait_time_rating}
											</Card.Text>
											<Card.Text>
												post created at: {review.created_at}
											</Card.Text>
											<Card.Link href='#'>Edit</Card.Link>
											<Card.Link href='#'>Delete</Card.Link>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Container>
					);
				})}
			</div>
	);
}
export default ReviewList;
