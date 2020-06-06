import React, { useState, useEffect } from 'react';
import Search from './Search';
import SearchResult from './SearchResult'
import AppForm from './AppForm'
import { Route, Link } from 'react-router-dom';

const doctorData = [
	{
		name: 'Tymoteusz Hopkins',
		city: 'Los Angeles',
		specialties: ['General', 'Dental'],
	},
	{
		name: 'Marley Mcnamara',
		city: 'New York',
		specialties: ['General', 'Dental', 'Specialty'],
	},
	{ name: 'Tyler-Jay Shea', city: 'Washington, DC', specialties: ['General'] },
	{ name: 'Lester Gibbs', city: 'Philadelphia', specialties: ['Specialty'] },
	{
		name: 'Laith Dalton',
		city: 'Los Angeles',
		specialties: ['General', 'Dental'],
	},
];
function Index() {
  const [searchString, setSearchString] = useState('');
	const [doctors, setDoctors] = useState('');
	
  // useEffect(() => {setSearchResult(doctors)}, []);
	function getDoctors(){
		setDoctors(doctorData)
	}
	
	const onSubmit = (event) => {
		event.preventDefault();
		getDoctors();
	};
	const onChange = (event) => {
		setSearchString(event.target.value);
	};
	return (
		<>
			<header>
				<h1>Zoo Doc</h1>
				<h2>Find pet care in your community</h2>
				<nav>
					<ul>
						<li>Sign up</li>
						<li>Log in</li>
					</ul>
				</nav>
			</header>
			<body>
				<Search
					onSubmit={onSubmit}
					onChange={onChange}
          searchString={searchString}
				/>
        <SearchResult doctors={doctors}/>
				<AppForm />
			</body>
		</>
	);
}
export default Index;
