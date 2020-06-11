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
				<div className='container carousel-overlay text-center'>
					<h2>Find vets in your community</h2>
					<div className='search-container'>
						<div className='search row justify-content-center  ml-auto'>
							<Form onSubmit={props.onSubmit} className='search-form'>
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

								{/* <Form.Group controlId='exampleForm.ControlSelect1'>
									<Form.Control as='select' className='search-bar'>
										<option>Choose service type</option>
										<option>General</option>
										<option>Dental</option>
										<option>Specialty</option>
									</Form.Control>
								</Form.Group> */}

								<Link to={`/doctors/${props.searchString}`}>
									<button type='submit' className='search-button search-bar'>
										Search for a vet
									</button>
								</Link>
							</Form>
						</div>
					</div>
				</div>
			</div>
			<div className='spacer'>
				<p className='search-banner'>Search for a vet in your area</p>
			</div>
		</>
	);
}

export default Search;
