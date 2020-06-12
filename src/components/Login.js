import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { APIURL } from '../config';
import { Link, Redirect } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function Login(props) {
	const initialLogin = {
		email: '',
		password: '',
	};
	const [login, setLogin] = useState(initialLogin);
	const [posted, setPosted] = useState(false);
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		event.persist();
		setLogin({
			...login,
			[event.target.name]: event.target.value,
		});
	};
	const handleLogin = (event) => {
		event.preventDefault();
		const url = `${APIURL}/api/users/login/`;

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(login),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response.token);
				props.setToken(response.token);
				setPosted(true);
			})
			.catch(() => {
				setError(true);
			});
	};
	if (posted) {
		return <Redirect to='/' />;
	}
	return (
		<div>
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Log In</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form onSubmit={handleLogin}>
						<Form.Group controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter email'
								onChange={handleChange}
								name='email'
								value={login.email}
							/>
						</Form.Group>
						<Form.Group controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Password'
								onChange={handleChange}
								name='password'
								value={login.password}
							/>
						</Form.Group>
						<Button variant='primary' type='submit' className='signin-button'>
							Log in
						</Button>
					</Form>
				</Modal.Body>
			</Modal.Dialog>
		</div>
	);
}
export default Login;
