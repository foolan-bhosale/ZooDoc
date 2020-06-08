import React, { useState, useEffect } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import AppForm from './AppForm';
import Doctor from './Doctor';
import Confirmation from './Confirmation';
import Profile from './Profile';
import { Route, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Slideshow from './Slideshow';

const doctorData = [
	{
		name: 'Tymoteusz Hopkins',
		city: 'Los Angeles',
		specialties: ['General', 'Dental'],
		review: '3 stars',
	},
	{
		name: 'Marley Mcnamara',
		city: 'New York',
		specialties: ['General', 'Dental', 'Specialty'],
		review: '4 stars',
	},
	{
		name: 'Tyler-Jay Shea',
		city: 'Washington, DC',
		specialties: ['General'],
		review: '5 stars',
	},
	{
		name: 'Lester Gibbs',
		city: 'Philadelphia',
		specialties: ['Specialty'],
		review: '3 stars',
	},
	{
		name: 'Laith Dalton',
		city: 'Los Angeles',
		specialties: ['General', 'Dental'],
		review: '4 stars',
	},
];

function Home() {
	const [searchString, setSearchString] = useState('');
	const [doctors, setDoctors] = useState('');

	

	const filteredDoctors = doctorData.filter((doctor) =>
		doctor.city.toLowerCase().includes(searchString.toLowerCase())
	);
	// console.log(filteredDoctors);
	
	const onSubmit = (event) => {
		event.preventDefault();
		filteredDoctors();
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

				<Slideshow/>
				<div className='spacer'>
					<p className='search-banner'>Search for a vet in your area</p>
				</div>

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
					path='/doctors/:city'
					exact={true}
					render={(routerProps) => {
						console.log({ doctors });
						return <SearchResult match={routerProps.match} filteredDoctors={filteredDoctors} />;
					}}
				/>

				<Route
					path='/doctor/:name'
					render={(routerProps) => {
						// console.log(routerProps.match);
						console.log({ doctors });
						return <Doctor match={routerProps.match} filteredDoctors={filteredDoctors} />;
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
