import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';


function Login() {
  return (
		<>
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Log In</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form>
						<Form.Group controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control type='text' placeholder='Enter email' />
						</Form.Group>

						<Form.Group controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' placeholder='Password' />
						</Form.Group>
						<Link to='/profile'>

							<Button variant='primary' type='submit' className='signin-button'>


								Log in
							</Button>
						</Link>
					</Form>
				</Modal.Body>
			</Modal.Dialog>
		</>
	);
}
export default Login
