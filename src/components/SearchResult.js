import React from 'react';
import { Link } from 'react-router-dom';
import {ListGroup, Card, CardDeck, Container} from 'react-bootstrap';
import '../App.css';

function SearchResult(props) {
	console.log(props)

	if (props.doctors.length===0) {
		return <h2>No doctors Found!</h2>;
	}
	return (
		<div>
			<div className='result-container'>
					{props.doctors.map((doctor) => {
						return (
							<CardDeck className='show-doctors' key={doctor.id}>
								<Card className='text-center'>
									<Card.Img
										variant='top'
										src={doctor.image_url}
										className='card-image'
									/>
									<Card.Body>
										<Card.Title>
											{doctor.first_name} {doctor.last_name}
										</Card.Title>
										<Card.Text>{doctor.office_name}</Card.Text>
									</Card.Body>
									<Card.Footer>
										<Link to={`/doctor/${doctor.id}`}>
											<button>See Dr. {doctor.last_name}'s Information</button>
										</Link>
									</Card.Footer>
								</Card>
							</CardDeck>
						);
					})}
			</div>
		</div>
	);
}

export default SearchResult;
