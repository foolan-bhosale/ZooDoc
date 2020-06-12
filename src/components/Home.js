import React, { useState, useEffect } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import WriteReview from './WriteReview';
import Doctor from './Doctor';
import Confirmation from './Confirmation';
import Profile from './Profile';
import { Route, Link } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import { APIURL } from '../config';

function Home() {
	const [searchString, setSearchString] = useState('');
	const [doctors, setDoctors] = useState([]);
	const [token, setToken] = useState('');
	useEffect(() => {
		getDoctors();
	}, []);

	function getDoctors() {
		const url = `${APIURL}/doctors/`;
		console.log(url);
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				// console.log(response);
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
						<img
							src='https://i.imgur.com/2nYKt0o.png'
							alt='logo'
							className='logo-image'
						/>
						{/* <p className='zoodoc'>ZooDoc</p> */}
					</Link>
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
								userToken={token}
								// filteredDoctors={filteredDoctors}
							/>
						);
					}}
				/>

				{/* <Route
					path='/review/:name'
					render={(routerProps) => {
						return (
							<WriteReview
								match={routerProps.match}
								doctors={doctors}
								// filteredDoctors={filteredDoctors}
							/>
						);
					}}
				/> */}
				<Route
					path='/signup'
					render={() => {
						return <Signup userToken={token} />;
					}}
				/>
				<Route
					path='/login'
					render={() => {
						return <Login setToken={setToken} userToken={token} />;
					}}
				/>
				<Route
					path='/review'
					render={() => {
						return <WriteReview userToken={token} />;
					}}
				/>
			</main>
		</>
	);
}
export default Home;
