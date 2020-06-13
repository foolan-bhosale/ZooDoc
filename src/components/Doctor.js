import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReviewList from './ReviewList'
import '../components/Doctor.css'

import { APIURL } from '../config';
// function Doctor(props) {
// 	console.log(props.doctors);
// 	const doctors = props.doctors;
// 	console.log(doctors);
// 	if (doctors.length === 0) {
// 		return <h2>No doctors Found!</h2>;
// 	}
// 	let doctor;
// 	for (let i = 0; i < doctors.length; i++) {
// 		console.log(props);
// 		if (props.match.params.id === doctors[i].id) {
// 			doctor = doctors[i];
// 		}
// 	}
const Doctor = ({ match, userToken }) => {
	const [doctor, setDoctor] = useState({});
	const [error, setError] = useState(false);

	useEffect(() => {
		const url = `${APIURL}/doctors/${match.params.id}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setDoctor(response);
			})
			.catch(console.error);
	}, []);

	return (
		<div className='container position-absolute'>
			<h1 className='my-4 doctor-heading'>
				{doctor.first_name} {doctor.last_name}
			</h1>
			{/* <ul>
				{doctor.specialization.map((special, index) => {
					return <li key={index}>{special}</li>;
				})}
			</ul> */}
			{/* <h3>{doctor.specialization}</h3> */}
			<div className='row'>
				<div className='col-md-6'>
					<img
						className='img-fluid'
						src={doctor.image_url}
						alt='doctor portrait'
					/>
				</div>
				<div className='col-md-6'>
					<h3 className='my-3 doctor-heading'>{doctor.office_name}</h3>
					<p className='doctor-about'>{doctor.about}</p>
					<h3 className='my-3 doctor-heading'>Contact Info:</h3>
					<p className='doctor-office'>
						{doctor.street_address} &nbsp;
						{doctor.city}, &nbsp;
						{doctor.state} &nbsp;
						{doctor.zip_code}
						<br />
						{doctor.phone_number}
						<br />
						<a href={doctor.website} target='_blank' rel='noopenner noreferrer'>
							{doctor.office_name}
						</a>
					</p>
					<div>
						<Link to='/review'>
							<button className='review-button'>Review Dr. {doctor.last_name}</button>
						</Link>
					</div>
				</div>
			</div>
			<ReviewList
				doctorId={doctor.id}
				doctorCity={doctor.city}
				userToken={userToken}
			/>
		</div>
	);
};
export default Doctor;
