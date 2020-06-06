import React from 'react';

function Search(props) {
	return (
		<>
			<form onSubmit={props.onSubmit}>
				<label htmlFor='search'>
					<input
						placeholder='Search by City'
						type='text'
						name=''
						required
						autoComplete='off'
						onChange={props.onChange}
						value={props.searchString}
					/>
				</label>
				<button type='submit' value='General' onClick={props.console}>General</button>
				<button type='submit' value='Dental'>Dental</button>
				<button type='submit' value='Specialty'>Specialty</button>
			</form>
		</>
	);
}

export default Search
