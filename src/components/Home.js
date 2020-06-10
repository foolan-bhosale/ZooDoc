import React, { useState, useEffect } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import Review from './Review';
import Doctor from './Doctor';
import Confirmation from './Confirmation';
import Profile from './Profile';
import reviewList from './ReviewList';
import { Route, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import { APIURL } from '../config';

function Home() {
	const [searchString, setSearchString] = useState('');
	const [doctors, setDoctors] = useState([]);

	useEffect(() => {
		getDoctors(searchString);
	}, [searchString]);

	function getDoctors(search) {
		const url = `${APIURL}/doctors/?search=${search}`;
		console.log(url);
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setDoctors(response);
				// setSearchString('')
			})
			.catch(console.error);
	}
	const filteredDoctors = doctors.filter((doctor) =>
		doctor.city.toLowerCase().includes(searchString.toLowerCase())
	);
	// console.log(filteredDoctors);

	const onSubmit = (event) => {
		event.preventDefault();
		getDoctors(searchString);
		// filteredDoctors();
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
						return (
							<SearchResult
								match={routerProps.match}
								// filteredDoctors={filteredDoctors}
								doctors={filteredDoctors}
								searchString={searchString}
							/>
						);
					}}
				/>

				<Route
					path='/doctor/:id'
					render={(routerProps) => {
						// console.log(routerProps.match);
						return (
							<Doctor
								match={routerProps.match}
								doctors={doctors}
								// filteredDoctors={filteredDoctors}
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
								doctors={doctors}
								// filteredDoctors={filteredDoctors}
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
