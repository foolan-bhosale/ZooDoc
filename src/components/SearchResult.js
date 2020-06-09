import React from 'react';
import { Link } from 'react-router-dom';
import {ListGroup, Card, CardDeck} from 'react-bootstrap';
import '../App.css';

function SearchResult(props) {
	console.log(props);
	if (!props.filteredDoctors.length) {
		return <h2>No doctors Found!</h2>;
	}
	return (
		<div>
			<p className='search-result'>Search Result in {props.searchString}</p>
			{props.filteredDoctors.map((doctor) => {
				return (
					<div className='result-container'>
						{/* <ListGroup variant='flush'>
						<Link to={`/doctor/${doctor.name}`}>
							<ListGroup.Item variant='light' className='secondary'>
								{doctor.name} ({doctor.specialization})
							</ListGroup.Item>
						</Link>
					</ListGroup> */}
						<CardDeck className='show-doctors'>
							<Card>
								<Card.Img variant='top' src='https://i.imgur.com/RIb6iFj.jpg' className='card-image'/>
								<Card.Body>
									<Card.Title>{doctor.name}</Card.Title>
									<Card.Text>{doctor.about}</Card.Text>
								</Card.Body>
								<Card.Footer>
									<Link to={`/doctor/${doctor.name}`}>
										<button>view</button>
									</Link>
								</Card.Footer>
							</Card>
						</CardDeck>
					</div>
				);
			})}
		</div>
	);
}

export default SearchResult;
