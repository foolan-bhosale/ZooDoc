import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { APIURL } from '../config';
import { Link, Redirect } from 'react-router-dom';

function Signup() {
const initialSignUp = {
	email: '',
	username: '',
	password: '',
}
const [signUp, setSignUp] = useState(initialSignUp);
const [posted, setPosted] = useState(false);
const [error, setError] = useState(false);

const handleChange = event => {
	event.persist();
	setSignUp({
		...signUp,
		[event.target.name]: event.target.value,
	});
};
const handleSubmit = event => {
	event.preventDefault();
	const url = `${APIURL}/api/users/register`;

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(signUp),
	})
	.then(response => response.json())
	.then(response => {
		console.log(response)
setPosted(true)
	})
	.catch(()=> {
		setError(true);
	})
}
// if (posted) {
// 	return <Redirect to='/login' />
// }
  	return (
			<div className='signup-container'>
				<Modal.Dialog>
					<Modal.Header>
						<Modal.Title>Sign Up</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form className='signup' onSubmit={handleSubmit}>
							<Form.Group controlId='formBasicEmail'>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									onChange={handleChange}
									type='text'
									placeholder='Enter email'
									name='email'
									value={signUp.email}
								/>
							</Form.Group>
							<Form.Group controlId='formBasicName'>
								<Form.Label>User Name</Form.Label>
								<Form.Control
									onChange={handleChange}
									type='text'
									placeholder='User name'
									name='username'
									value={signUp.username}
								/>
							</Form.Group>

							<Form.Group controlId='formBasicPassword'>
								<Form.Label>Password</Form.Label>
								<Form.Control
									onChange={handleChange}
									type='password'
									placeholder='Password'
									name='password'
									value={signUp.password}
								/>
							</Form.Group>
							<Button variant='primary' type='submit' className='signup-button'>
								Sign Up
							</Button>
						</Form>
					</Modal.Body>
				</Modal.Dialog>
			</div>
		);
}
export default Signup