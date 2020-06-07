import React from 'react';
import { Link } from 'react-router-dom';

function Search(props) {
	return (
		<>
			<form onSubmit={props.onSubmit}>
				{/* <label htmlFor='search'> */}
					<input
						placeholder='Search by City'
						type='text'
						name='searchString'
						required
						autoComplete='off'
						onChange={props.onChange}
						value={props.searchString}
					/>
				{/* </label> */}
				{/* <label >Choose doctor type:</label> */}
				<select >
					<option value='General'>General</option>
					<option value='Dental'>Dental</option>
					<option value='Specialty'>Specialty</option>
				</select>
				<Link to={'/doctors'}>
				<button type='submit'>Submit</button>
				</Link>
			</form>
		</>
	);
}

export default Search
