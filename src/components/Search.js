import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Slideshow from './Slideshow';

function Search(props) {
	return (
		<>
			<div className='slideshow'>
				<Slideshow />
				<div className='container carousel-overlay text-center'>
					<h2 className='findvet'>Find vets in your community</h2>

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
		</>
	);
}

export default Search;
