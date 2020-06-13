import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { APIURL } from '../config';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

function EditReview({ match, history }, props) {
	const [review, setReview] = useState({
		name: '',
		description: '',
		overall_rating: '',
		bed_side_rating: '',
		wait_time_rating: '',
	});

	useEffect(() => {
		console.log('useEffect')
		fetch(`${APIURL}/reviews/8`, {
			headers: {
				// 'Content-Type': 'application/json',
				'Authorization': `Bearer ${props.userToken}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setReview({
					name: data.name,
					description: data.description,
					overall_rating: data.overall_rating,
					bed_side_rating: data.bed_side_rating,
					wait_time_rating: data.wait_time_rating,
				});
			})
			.then((response) => console.log(response))
			.catch(console.error);
	}, []);



	const handleChange = (e) => {
		setReview({ ...review, [e.target.name]: e.target.value });
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch(`${APIURL}/reviews/${match.params.id}`, {
			method: 'PUT',
			body: JSON.stringify(review),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${props.userToken}`,
			},
		})
			.then((response) => {
				history.push(`/${match.params.id}`);
			})
			.catch(console.error);
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
					name='username'
                    value={review.username}
                    defaultValue={review.username}
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
					name='overallExperience'
					value={review.overallExperience}>
					<option>Choose your rating</option>
					<option>1 star</option>
					<option>2 stars</option>
					<option>3 stars</option>
					<option>4 stars</option>
					<option>5 stars</option>
				</Form.Control>
			</Form.Group>
			<Form.Group controlId='exampleForm.ControlSelect1'>
				Bedside Manner
				<Form.Control
					as='select'
					onChange={handleChange}
					name='bedsideManner'
					value={review.bedsideManner}>
					<option>Choose your rating</option>
					<option>1 star</option>
					<option>2 stars</option>
					<option>3 stars</option>
					<option>4 stars</option>
					<option>5 stars</option>
				</Form.Control>
			</Form.Group>
			<Form.Group controlId='exampleForm.ControlSelect1'>
				Wait Time
				<Form.Control
					as='select'
					onChange={handleChange}
					name='waitTime'
					value={review.waitTime}>
					<option>Choose your rating</option>
					<option>1 star</option>
					<option>2 stars</option>
					<option>3 stars</option>
					<option>4 stars</option>
					<option>5 stars</option>
				</Form.Control>
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	</div>
)
}
export default EditReview;