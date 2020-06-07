import React, { useState, useEffect } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import AppForm from './AppForm';
import Doctor from './Doctor';
import { Route, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

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

function Home() {
	const [searchString, setSearchString] = useState('');
	const [doctors, setDoctors] = useState('');

	useEffect(() => {
		getDoctors();
	}, []);

	function getDoctors() {
		setDoctors(doctorData);
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
			<Link to='/'>
				<h1>Zoo Doc</h1>
			</Link>
			<h3>Find pet care in your community</h3>

			<nav>
				<Link to='/signup'>Sign up </Link>
				<Link to='/login'> Log in</Link>
			</nav>

			<main>
				<Route
					path='/'
					exact={true}
					render={() => {
						return (
							<Search
								onSubmit={onSubmit}
								onChange={onChange}
								searchString={searchString}
							/>
						);
					}}
				/>
				<Route
					path='/doctors'
					exact={true}
					render={() => {
						return <SearchResult doctors={doctors} />;
					}}
				/>

				<Route
					path='/doctors/:name'
					render={(routerProps) => {
						console.log(routerProps.match);
						return <Doctor match={routerProps.match} doctors={doctors} />;
					}}
				/>
			
				<Route path='/appointment' component={AppForm} />
				<Route path='/signup' component={Signup} />
				<Route path='/login' component={Login} />
			</main>
		</>
	);
}
export default Home;
