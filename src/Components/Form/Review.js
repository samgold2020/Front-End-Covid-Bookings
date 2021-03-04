import React from 'react';
import { Link } from 'react-router-dom';
import './review.css';
import Disclaimer from './Disclaimer';
import HospitalImage from '../../images/national-cancer-institute.jpg';
import ProgressThree from '../../images/progressthree.png';

const Review = ({ formData, navigation }) => {
	const {
		firstName,
		lastName,
		phoneNumber,
		email,
		date,
		hospital,
	} = formData;

	const { previous } = navigation;


	return (
		<div className='review-wrapper'>
			<div className='progress-bar'>
				<img
					className='progress-bar'
					src={ProgressThree}
					alt='progress bar step 3'
				/>
			</div>
			<h3>Review</h3>
			<img className='hospitalimg' src={HospitalImage} alt='hospital-fossad' />
			<div className='review-content'>
				<b>Name:</b> ${firstName} ${lastName}
			</div>
			<div className='review-content'>
				<b>Phone Number:</b> ${phoneNumber}
			</div>
			<div className='review-content'>
				<b>Email:</b> ${email}
			</div>
			<div className='review-content'>
				<b>Appointment Date:</b> ${date}
			</div>
			<div className='review-content'>
				<b>Location:</b> ${hospital}
			</div>
			<div>
				<div>
					<button id='previousbtn' onClick={previous}>
						Previous
					</button>
					<Disclaimer />
				</div>
				<Link
					to={{
						pathname: '/confirmation',
						//passing the formData Object to the submit component for rendering:
						state: {
							formData,
						},
					}}>
					<button id='submit'> Submit</button>
				</Link>
			</div>
		</div>
	);
};

export default Review;
