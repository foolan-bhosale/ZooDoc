import React from 'react';
import { Form, Button} from 'react-bootstrap'
function Review() {
return (
	<div className='review-container'>
		<Form>
			<Form.Group>
				<Form.Label>Your name</Form.Label>
				<Form.Control type='text' placeholder='type your name' />
			</Form.Group>

			<Form.Group>
				<Form.Label>Describe your experience</Form.Label>
				<Form.Control type='text' placeholder='description' />
			</Form.Group>
			<Form.Group controlId='exampleForm.ControlSelect1'>
				Overall Experience
				<Form.Control as='select'>
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
				<Form.Control as='select'>
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
				<Form.Control as='select'>
					<option>Choose your rating</option>
					<option>1 star</option>
					<option>2 stars</option>
					<option>3 stars</option>
					<option>4 stars</option>
					<option>5 stars</option>
				</Form.Control>
			</Form.Group>
			<Form.Group>
				<Form.Label>Today's Date</Form.Label>
				<Form.Control type='text' placeholder='date' />
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	</div>
);
}
export default Review
