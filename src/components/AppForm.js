import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AppForm(props) {
	const [searchDate, setSearchDate] = useState('');

	return (
		<Form>
			<Form.Group>
				<Form.Label>Pet's Name</Form.Label>
				<Form.Control type='text' placeholder='name' />
			</Form.Group>
			<Form.Group>
				<Form.Label>Pet's type</Form.Label>
				<Form.Control type='text' placeholder='type' />
			</Form.Group>
			<Form.Group>
				<Form.Label>Pet's age</Form.Label>
				<Form.Control type='text' placeholder='age' />
			</Form.Group>
			<Form.Group controlId='formBasicEmail'>
				<Form.Label>Reason for Visiting</Form.Label>
				<Form.Control type='text' placeholder='reason for visiting' />
			</Form.Group>

			<Form.Group controlId='formBasicPassword'>
				<Form.Label>Choose Date</Form.Label>
				<Form.Control
					type='date'
					placeholder='choose date'
					onChange={(event) => setSearchDate(event.target.value)}
					value={searchDate}
				/>
			</Form.Group>
			<Link to='/confirmation'>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Link>
		</Form>
	);
}
export default AppForm;