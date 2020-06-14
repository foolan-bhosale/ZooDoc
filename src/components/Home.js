import React, { useState, useEffect } from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import WriteReview from './WriteReview';
import Doctor from './Doctor';
import Confirmation from './Confirmation';
import Profile from './Profile';
import { Route, Link, Redirect } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import EditReview from './EditReview';
import { APIURL } from '../config';

function Home() {
	const getToken = localStorage.getItem('token');
	const [searchString, setSearchString] = useState('');
	const [doctors, setDoctors] = useState([]);
	const [token, setToken] = useState(getToken);
	const [reviewId, setReviewId] = useState('');
	const [doctorID, setDoctorID] = useState('');

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
	const signOut = (event) => {
		event.preventDefault();
		setToken('');
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
					</Link>
				</div>
				<div className='links'>
					{token ? (
						<button onClick={signOut} className='sign-button'>
							Sign out
						</button>
					) : (
						<>
							<Link to='/signup'>
								<button className='sign-button'>Sign up</button>
							</Link>
							<Link to='/login' className='login-button'>
								Log in
							</Link>
						</>
					)}
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
								reviewId={setReviewId}
								doctorID={setDoctorID}
								// filteredDoctors={filteredDoctors}
							/>
						);
					}}
				/>
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
						return <WriteReview userToken={token} doctorID={doctorID} />;
					}}
				/>
				<Route
					path='/edit'
					render={() => {
						return (
							<EditReview
								userToken={token}
								reviewId={reviewId}
								doctorID={doctorID}
							/>
						);
					}}
				/>
			</main>
		</>
	);
}
export default Home;
