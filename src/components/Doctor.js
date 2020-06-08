import React from 'react';
import { Link } from 'react-router-dom';

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
		<div>
			<h1>{doctor.name}</h1>
			<p>{doctor.city}</p>
			<p>{doctor.specialties}</p>
			<p>{doctor.review}</p>
			<Link to='/appointment'>
				<button>make appointment</button>
			</Link>
		</div>
	);
}
export default Doctor