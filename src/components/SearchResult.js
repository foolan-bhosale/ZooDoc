import React from 'react';

function SearchResult(props) {
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
          <h1>{doctor.name}</h1>
          <p>{doctor.specialties}</p>
          </div>
        )
      })}
      
      {/* {props.doctors} */}
    </div>
    </>
  )
}

export default SearchResult