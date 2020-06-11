import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { APIURL } from '../config';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';

function EditReview({ match, history }) {
	const [review, setReview] = useState({
		username: '',
		description: '',
		overallExperience: '',
		bedsideManner: '',
		waitTime: '',
		date: Date.now,
	});

	useEffect(() => {
		fetch(`${APIURL}/reviews/${match.params.id}`)
			.then((response) => response.json())
			.then((response) => {
				setReview(response);
			})
			.catch(console.error);
	}, [match.params.id]);

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
					onChange={this.handleChange}
					name='waitTime'
					value={this.review.waitTime}>
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