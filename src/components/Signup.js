import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Signup() {
  return (
		<Form>
			<Form.Group controlId='formBasicEmail'>
				<Form.Label>Email address</Form.Label>
				<Form.Control type='text' placeholder='Enter email' />
			</Form.Group>
			<Form.Group controlId='formBasicEmail'>
				<Form.Label>User Name</Form.Label>
				<Form.Control type='text' placeholder='User name' />
			</Form.Group>

			<Form.Group controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control type='password' placeholder='Password' />
			</Form.Group>
			<Button variant='primary' type='submit'>
				Sign up
			</Button>
		</Form>
	);
}
export default Signup