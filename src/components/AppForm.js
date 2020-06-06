import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppForm(props) {
	const [searchDate, setSearchDate] = useState('');

	return (
		<Form>
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
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);
}
export default AppForm;
