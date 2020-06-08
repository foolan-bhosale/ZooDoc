import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Search(props) {
	console.log(props)
	return (
		<div className='search-container'>
		<div className='search'>
			<Form onSubmit={props.onSubmit}>
				<Form.Group controlId='SearchByCity'>
					<Form.Control
						placeholder='Search by City'
						type='text'
						name='searchString'
						required
						onChange={props.onChange}
						value={props.searchString}
					/>
				</Form.Group>
				
				<Form.Group controlId='exampleForm.ControlSelect1'>
					<Form.Control as='select'>
						<option>Choose service type</option>
						<option>General</option>
						<option>Dental</option>
						<option>Specialty</option>
					</Form.Control>
				</Form.Group>

				<Link to={'/doctors'}>
					<button type='submit' className='search-button'>Search for a vet</button>
				</Link>
			</Form>
		</div>
		</div>
	);
}

export default Search
