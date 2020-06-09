import React from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Accordion, Button, CardDeck } from 'react-bootstrap';

function Doctor(props) {
  console.log(props.filteredDoctors)
  const doctors = props.filteredDoctors;
  let doctor;
  for (let i = 0; i < doctors.length; i++) {
    if (props.match.params.name === doctors[i].name) {
      doctor = doctors[i];
    }
  }
  return (
		<div className='container justify-content-center align-items-center position-absolute'>
			{/* <Card style={{ width: '18rem' }} >
				<Card.Img variant='top' src='https://i.imgur.com/RIb6iFj.jpg' />
				<Card.Body>
					<Card.Title>{doctor.name}</Card.Title>
					<Card.Text>{doctor.about}</Card.Text>
				</Card.Body>
				<ListGroup className='list-group-flush'>
					<ListGroupItem>
						{doctor.streetAddress}, {doctor.city} {doctor.zipCode}
					</ListGroupItem>
					<ListGroupItem>{doctor.phone}</ListGroupItem>
				</ListGroup>
				<Card.Body>
					<Accordion>
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} variant='link' eventKey='0'>
									Reivew
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey='0'>
								<Card.Body>Hello! I'm the body</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
				</Card.Body>
			</Card> */}
			<h1 className='my-4'>
				{doctor.name}
				<h3>{doctor.specialization}</h3>
			</h1>
			<div className='row'>
				<div className='col-md-8'>
					<img
						className='img-fluid'
						src='https://i.imgur.com/RIb6iFj.jpg'
						alt=''
					/>
				</div>
				<div className='col-md-4'>
					<h3 className='my-3'>{doctor.officeName}</h3>
					<p>{doctor.about}</p>
					<h3 className='my-3'>Contact Info:</h3>
					<p>{doctor.streetAddress}</p>
					<p>
						{doctor.city}, {doctor.state} {doctor.zipCode}
					</p>
					<p>{doctor.phone}</p>
					<Link to='/review'>
						<button>write review</button>
					</Link>
				</div>
				<div className='review'>
					<Card style={{ width: '18rem' }}>
						<Card.Body>
							<Card.Title>Review:</Card.Title>
							<Card.Text>description: {doctor.description}</Card.Text>
							<Card.Text>overall: {doctor.overallRating}</Card.Text>
							<Card.Text>bedside: {doctor.bedSideRating}</Card.Text>
							<Card.Text>wait time: {doctor.waitTime}</Card.Text>
							<Card.Text>post created at: {doctor.createdTime}</Card.Text>
							<Card.Link href='#'>Edit</Card.Link>
							<Card.Link href='#'>Delete</Card.Link>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
}
export default Doctor