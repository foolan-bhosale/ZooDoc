import React, { useState, useEffect } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import AppForm from './AppForm';
import Doctor from './Doctor';
import Confirmation from './Confirmation'
import Profile from './Profile'
import { Route, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import 

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


	// useEffect(() => {
	// 	getDoctors();
	// }, []);



	// function getDoctors() {
	// 	setDoctors(doctorData)
	// }

	const onSubmit = (event) => {
		console.log('it runs')
		event.preventDefault();
			const filteredDoctors = doctorData.filter((doctor) =>
				doctor.city.includes(searchString)
			);
		setDoctors(filteredDoctors)
	
	};
	const onChange = (event) => {
		setSearchString(event.target.value);
	};
	return (
		<>
			<nav>
			<div className='title'>
				<Link to='/'>
					<p className='zoodoc'>Zoo Doc</p>
				</Link>
				<p className='community'>Find pet care in your community</p>
				</div>
				<div className='links'>
					<Link to='/signup'>Sign up </Link>
					<Link to='/login'> Log in</Link>
				</div>
			</nav>

			<main>
				<SlideShow/>
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
					path='/doctor/:city'
					exact={true}
					render={(routerProps) => {
						return <SearchResult match={routerProps.match} doctors={doctors} />;
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
				<Route path='/confirmation' component={Confirmation} />
				<Route path='/profile' component={Profile} />
			</main>
		</>
	);
}
export default Home;
