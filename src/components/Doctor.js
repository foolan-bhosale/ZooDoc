import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReviewList from './ReviewList';
import '../components/Doctor.css';

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
const Doctor = ({ match, userToken, reviewId, doctorID }) => {
	const [doctor, setDoctor] = useState({});
	const [error, setError] = useState(false);

	useEffect(() => {
		const url = `${APIURL}/doctors/${match.params.id}`;
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setDoctor(response);
				doctorID(response.id);
			})
			.catch(console.error);
	}, [doctorID, match.params.id]);

	return (
		<>
			<div className='container'>
				<h1 className='my-4 doctor-heading'>
					{doctor.first_name} {doctor.last_name}
				</h1>
				<div className='row'>
					<div className='col-md-6 col-12'>
						<img
							className='img-thumbnail img-fluid'
							src={doctor.image_url}
							alt='doctor portrait'
						/>
					</div>
					<div className='col-md-6 col-12'>
						<h3 className='my-3 doctor-heading text-center'>
							{doctor.office_name}
						</h3>
						<p className='doctor-about'>{doctor.about}</p>
						<section className='mt-3   text-center p-3'>
							<h3 className='my-3 doctor-heading '>Contact Info:</h3>
							<p className='doctor-office'>
								{doctor.street_address} &nbsp;
								{doctor.city}, &nbsp;
								{doctor.state} &nbsp;
								{doctor.zip_code}
								<br />
								{doctor.phone_number}
								<br />
							</p>
							<a
								href={doctor.website}
								target='_blank'
								rel='noopenner noreferrer'>
								{doctor.office_name}
							</a>
						</section>
						<div>
							{userToken ? (
								<Link to='/review'>
									<button className='review-button'>
										Review Dr. {doctor.last_name}
									</button>
								</Link>
							) : (
								<Link to='/login'>
									<button className='review-button'>Review Dr. {doctor.last_name}</button>
								</Link>
							)}
						</div>
					</div>
				</div>
				<div>
					<ReviewList
						doctorId={doctor.id}
						doctorCity={doctor.city}
						userToken={userToken}
						reviewId={reviewId}
					/>
				</div>
			</div>
		</>
	);
};
export default Doctor;
