import React from 'react';
import { Form, Button} from 'react-bootstrap'
import { APIURL } from '../config';
import {useState} from 'react'
import {Redirect} from 'react-router'

function WriteReview(props) {
	const initialReviewData = {
		username: '',
		description: '',
		overallExperience: '',
		bedsideManner: '',
		waitTime: '',
		date: Date.now
	}

	const [review, setReview] = useState(initialReviewData)
	const [createdId, setCreatedId] = useState(null)
	const [error, setError] = useState(false)

	const handleChange = event => {
		event.persist()
		setReview({
			...review,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = (event) => {
		console.log(review)
		event.preventDefault()
		const url = `${APIURL}/reviews/`;
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
				
			},
			body: JSON.stringify(review),
		})
			.then((response) => response.json())
			.then((data) => {
				setCreatedId(data.id);
			})
			.catch(() => {
				setError(true);
			});
	}
	
	if(createdId){
		return <Redirect to={`/reviews/${createdId}`}/>
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
	);
}

export default WriteReview