import React, { useState, useEffect } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import Review from './Review';
import Doctor from './Doctor';
import Confirmation from './Confirmation';
import Profile from './Profile';
import { Route, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import { APIURL } from '../config';

const doctorData = [
	{
		name: 'Tymoteusz Hopkins',
		gender: 'Male',
		specialization: ['General', 'Dental'],
		imageUrl: 'https://i.imgur.com/RIb6iFj.jpg',
		about: 'we provide good service for pets',
		officeName: 'Tymoteusz Hopkins Office',
		streetAddress: '12345 east bay',
		city: 'Los Angeles',
		state: 'CA',
		zipCode: 10000,
		phone: '212-337-5549',
		description: 'good',
		overallRating: '3 stars',
		bedSideRating: '4 stars',
		waitTime: '2 stars',
		createdTime: 'June 8th, 2020',
	},
	{
		name: 'Marley Mcnamara',
		gender: 'Female',
		specialization: ['General', 'Dental', 'Specialty'],
		imageUrl: 'https://i.imgur.com/RIb6iFj.jpg',
		about: 'we provide good service for pets',
		officeName: 'Marley Mcnamara Office',
		streetAddress: '12345 east bay',
		city: 'New York',
		state: 'NY',
		zipCode: 10000,
		phone: '212-337-5549',
		description: 'good',
		overallRating: '3 stars',
		bedSideRating: '4 stars',
		waitTime: '2 stars',
		createdTime: 'June 8th, 2020',
	},
	{
		name: 'Tyler-Jay Shea',
		gender: 'Male',
		specialization: ['General'],
		imageUrl: 'https://i.imgur.com/RIb6iFj.jpg',
		about: 'we provide good service for pets',
		officeName: 'Tyler-Jay Shea Office',
		streetAddress: '12345 east bay',
		city: 'Washington, DC',
		state: '',
		zipCode: 10000,
		phone: '212-337-5549',
		description: 'good',
		overallRating: '3 stars',
		bedSideRating: '4 stars',
		waitTime: '2 stars',
		createdTime: 'June 8th, 2020',
	},
	{
		name: 'Lester Gibbs',
		gender: 'Male',
		specialization: ['Specialty'],
		imageUrl: 'https://i.imgur.com/RIb6iFj.jpg',
		about: 'we provide good service for pets',
		officeName: 'Lester Gibbs Office',
		streetAddress: '12345 east bay',
		city: 'Philadelphia',
		state: 'PA',
		zipCode: 10000,
		phone: '212-337-5549',
		description: 'good',
		overallRating: '3 stars',
		bedSideRating: '4 stars',
		waitTime: '2 stars',
		createdTime: 'June 8th, 2020',
	},
	{
		name: 'Laith Dalton',
		gender: 'Female',
		specialization: ['General', 'Dental'],
		imageUrl: 'https://i.imgur.com/RIb6iFj.jpg',
		about: 'we provide good service for pets',
		officeName: 'Laith Dalton Office',
		streetAddress: '12345 east bay',
		city: 'Los Angeles',
		state: 'CA',
		zipCode: 10000,
		phone: '212-337-5549',
		description: 'good',
		overallRating: '3 stars',
		bedSideRating: '4 stars',
		waitTime: '2 stars',
		createdTime: 'June 8th, 2020',
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
						<p className='zoodoc'>ZooDoc</p>
					</Link>
					{/* <p className='community'>Find pet care in your community</p> */}
				</div>
				<div className='links'>
					<Link to='/signup'>Sign up </Link>
					<Link to='/login'> Log in</Link>
				</div>
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
					path='/doctors/:city'
					exact={true}
					render={(routerProps) => {
						console.log({ doctors });
						return (
							<SearchResult
								match={routerProps.match}
								filteredDoctors={filteredDoctors}
								searchString={searchString}
							/>
						);
					}}
				/>

				<Route
					path='/doctor/:name'
					render={(routerProps) => {
						// console.log(routerProps.match);
						console.log({ doctors });
						return (
							<Doctor
								match={routerProps.match}
								filteredDoctors={filteredDoctors}
							/>
						);
					}}
				/>

				<Route
					path='/review/:name'
					render={(routerProps) => {
						return (
							<Review
								match={routerProps.match}
								filteredDoctors={filteredDoctors}
							/>
						);
					}}
				/>
				<Route path='/signup' component={Signup} />
				<Route path='/login' component={Login} />
				<Route path='/confirmation' component={Confirmation} />
				<Route path='/profile' component={Profile} />
				<Route path='/review' component={Review} />
			</main>
		</>
	);
}
export default Home;
