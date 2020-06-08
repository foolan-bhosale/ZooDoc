import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

function Signup() {

  	return (
			<div className='signup-container'>
				<Modal.Dialog>
					<Modal.Header>
						<Modal.Title>Sign Up</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form className='signup'>
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
							<Button className='signup-button' variant='primary' type='submit'>
								Sign Up
							</Button>
						</Form>
					</Modal.Body>
				</Modal.Dialog>
			</div>
		);
}
export default Signup