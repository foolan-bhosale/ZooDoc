import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Slideshow from './Slideshow';

function Search(props) {
	console.log(props);
	return (
		<>
			<div className='slideshow'>
				<Slideshow />
				<div className='search-container'>
						<div className='search'>
							<Form onSubmit={props.onSubmit}>
								<Form.Group controlId='SearchByCity'>
									<Form.Control
										className='search-bar'
										placeholder='Search by City'
										type='text'
										name='searchString'
										required
										autoComplete='off'
										onChange={props.onChange}
										value={props.searchString}
									/>
								</Form.Group>

						<Form.Group controlId='exampleForm.ControlSelect1'>
							<Form.Control as='select' className='search-bar'>
								<option>Choose Service Type</option>
								<option>General</option>
								<option>Dental</option>
								<option>Specialty</option>
							</Form.Control>
						</Form.Group>

						<Link to={`/doctors/${props.searchString}`}>
							<button type='submit' className='search-button'>
								Search for a vet
							</button>
						</Link>
					</Form>
				</div>
			</div>
			</div>
		</>
	);
}

export default Search;
