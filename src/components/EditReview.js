import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { APIURL } from '../config';
import { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
function EditReview({ reviewId, userToken, doctorID, }) {
	const [review, setReview] = useState({
		name: '',
		description: '',
		overall_rating: '',
		bed_side_rating: '',
		wait_time_rating: '',
		// date: Date.now,
	});
	const [edited, setEdited] = useState(false);
	useEffect(() => {
		fetch(`${APIURL}/reviews/${reviewId}`, {
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
				Authorization: `Bearer ${userToken}`,
			},
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response)
				setReview(response);
			})
			.catch(console.error);
	}, [reviewId, userToken]);
	const handleChange = (e) => {
		setReview({ ...review, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`${APIURL}/reviews/${reviewId}`, {
			method: 'PUT',
			body: JSON.stringify(review),
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
				Authorization: `Bearer ${userToken}`,
			},
		})
			.then((response) => {
				console.log(response);
				setEdited(true);
			})
			.catch(console.error);
	};
	if (edited) {
		return <Redirect to={`/doctor/${doctorID}`} />;
	}
	return (
		<div className='review-container'>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Your name</Form.Label>
					<Form.Control
						type='text'
						placeholder='type your name'
						onChange={handleChange}
						name='name'
						value={review.name}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Describe your experience</Form.Label>
					<Form.Control
						type='text'
						placeholder='description'
						onChange={handleChange}
						name='description'
						value={review.description}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlSelect1'>
					Overall Experience
					<Form.Control
						as='select'
						onChange={handleChange}
						name='overall_rating'
						value={review.overall_rating}>
						<option>Choose your rating</option>
						<option value='1'>1 star</option>
						<option value='2'>2 stars</option>
						<option value='3'>3 stars</option>
						<option value='4'>4 stars</option>
						<option value='5'>5 stars</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlSelect1'>
					Bedside Manner
					<Form.Control
						as='select'
						onChange={handleChange}
						name='bed_side_rating'
						value={review.bed_side_rating}>
						<option>Choose your rating</option>
						<option value='1'>1 star</option>
						<option value='2'>2 stars</option>
						<option value='3'>3 stars</option>
						<option value='4'>4 stars</option>
						<option value='5'>5 stars</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlSelect1'>
					Wait Time
					<Form.Control
						as='select'
						onChange={handleChange}
						name='wait_time_rating'
						value={review.wait_time_rating}>
						<option>Choose your rating</option>
						<option value='1'>1 star</option>
						<option value='2'>2 stars</option>
						<option value='3'>3 stars</option>
						<option value='4'>4 stars</option>
						<option value='5'>5 stars</option>
					</Form.Control>
				</Form.Group>
				<Form.Group className='doctor-id'>
					<Form.Label>Doctor ID</Form.Label>
					<Form.Control
						type='text'
						placeholder='type your name'
						onChange={handleChange}
						name='doctor_id'
						value={review.doctor_id}
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
				<Link to={`/doctor/${review.doctor_id}`} className='btn btn-link'>
					Cancel
				</Link>
			</Form>
		</div>
	);
}
export default EditReview;
