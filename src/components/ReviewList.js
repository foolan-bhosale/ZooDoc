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
import StarRatingComponent from 'react-star-rating-component';

function ReviewList(props) {
	// console.log(props);
	const [reviews, setReviews] = useState([]);
	const [deleted, setDeleted] = useState(false);
	useEffect(() => {
		const url = `${APIURL}/reviews`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setReviews(response);
			})
			.catch(console.error);
	}, []);
	let filteredReview = reviews.filter(
		(review) => review.doctor_id === props.doctorId
	);

	let overallRating = 0;
	let totalReviews = filteredReview.length;
	// console.log('totalReviews ', totalReviews);
	filteredReview.forEach((review) => {
		overallRating = overallRating + parseInt(review.overall_rating);
		// console.log('overallRating ', overallRating);
	});
	if (totalReviews > 0) {
		overallRating = overallRating / totalReviews;
	}
	const handelEdit = (event) => {
		props.reviewId(event.target.id);
	};

	const deleteComment = (event) => {
		// console.log(props.userToken);
		const url = `${APIURL}/reviews/${event.target.id}`;
		props.userToken
			? fetch(url, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json; charset=UTF-8',
						Authorization: `Bearer ${props.userToken}`,
					},
			  })
					.then((res) => {
						setDeleted(true);
					})
					.catch(console.error)
			: alert('You are not authorized');
	};
	if (deleted) {
		return <Redirect to='/' />;
		// return <Redirect to={`/doctors/${props.doctorCity}`} />;
		// {`/doctor/${props.doctorId}`}
	}

	// if (!reviews) return null;
	return (
		<div>
			<div className='star-container'>
				<h2 className='star-header'>Overall Rating:</h2>
				{overallRating === 0 ? (
					'Be the first one to review'
				) : (
					<StarRatingComponent
						name='overallRating'
						editing={false}
						renderStarIcon={() => (
							<span>
								<i className='fa fa-star' />
							</span>
						)}
						starCount={5}
						value={overallRating}
					/>
				)}
			</div>
			<Container className='container-fluid d-flex justify-content-center'>
				<Row>
					{filteredReview.map((review) => {
						return (
							<Col
								sm={true}
								className='col-lg-4 col-sm-12 col-md-6 mb-3'
								key={review.id}>
								<Card
									style={{ width: '18rem' }}
									className='text-center h-100 review-card '>
									<Card.Body className='single-card'>
										<Card.Title className='review-header'>Review:</Card.Title>
										<Card.Text>
											<span className='review-key'>Posted by:</span>{' '}
											{review.name}
										</Card.Text>
										<Card.Text>
											<span className='review-key'>Description:</span>{' '}
											{review.description}
										</Card.Text>
										<Card.Text>
											<span className='review-key'>Overall:</span>{' '}
											{review.overall_rating}
										</Card.Text>
										<Card.Text>
											<span className='review-key'>Bedside:</span>{' '}
											{review.bed_side_rating}
										</Card.Text>
										<Card.Text>
											<span className='review-key'>Wait Time:</span>{' '}
											{review.wait_time_rating}
										</Card.Text>
										<Card.Text>
											<span className='review-key'>Created: </span>
											{new Intl.DateTimeFormat('en-US', {
												year: 'numeric',
												month: 'long',
												day: '2-digit',
											}).format(Date.parse(review.created_at))}
										</Card.Text>
										<Card.Link>
											{props.userToken ? (
												<Link
													to='/edit'
													className='btn btn-primary edit'
													id={review.id}
													onClick={handelEdit}>
													Edit
												</Link>
											) : (
												<Link
													to='/login'
													className='btn edit'
													id={review.id}
													onClick={handelEdit}>
													Edit
												</Link>
											)}
										</Card.Link>
										<Card.Link>
											<button
												onClick={deleteComment}
												id={review.id}
												className='btn delete'>
												Delete
											</button>
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
