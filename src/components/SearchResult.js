import React from 'react';
import { Link } from 'react-router-dom';

function SearchResult(props) {
  console.log(props)
if (!props.doctors.length) {
	return <h2>No doctors Found!</h2>;
}
  return (
    <>
    <p>Search Result</p>
    <div>
      {props.doctors.map((doctor) => {
        return (
					<div>
						<Link to={`/doctors/${doctor.name}`}>
							<h1>{doctor.name}</h1>
						</Link>
						<p>{doctor.specialties}</p>
					</div>
				);
      })}
      
    </div>
    </>
  )
}

export default SearchResult