import React from 'react';
import { useLocation, Link } from 'react-router-dom';

//Style and image imports
import './confirmation.css';
import VaxineShotLogo from '../../images/vaxine-shot-logo.png';
import ProgressFour from '../../images/progressfour.png';

const ConfirmationPage = () => {
	//Location gets back the location object from the './confirmation' URL path, which contains the current formData object
	const location = useLocation();

	//Setting the formData to a variable 
	let userData = location.state.formData
	let wholeName = `${userData.firstName} ${userData.lastName}`

	//Set userInputArray to an empty array, this will hold all of our userInput which we get back in the location object 
	let userInputArray = []

	userInputArray.push(
		wholeName, 
		userData.email, 
		userData.phoneNumber,
		//Date comes in as an object, converting it to string for map in return
		userData.date.toString(), 
		userData.hospital
		);

	return (
		<>
			<div className="confirmation-wrapper">
				{/* image for the progress bar */}
				<img
				className='progress-bar'
				src={ProgressFour}
				alt='progress bar step 4'
				/>
				<h1>Appointment Confirmed</h1>
				{/* image for vaxine logo confirmation */}
				<img 
				className='vaxine-img'
				src={VaxineShotLogo} 
				alt='vaxine-logo' 
				/>
				<ul>
					{/* Map over the userInputArray to display each item */}
					{userInputArray.map(function(item, index){
						return <li className='confirmation-data' key={index}>{item}</li>
					})}
				</ul>
					<div className='disclaimer-content'>
						<p id='disclaimer'>
							IF YOU NEED TO RESCHEDULE YOUR APPOINTMENT, MAKE SURE TO CANCEL
								YOUR CURRENT APPOINTMENT WITHIN 24 HOURS BEFORE THE CONFIRMED DATE
								AND TIME.
						</p>
				</div>
					<div className='btn-wrapper'>
						<Link to='/'>
							<button>Home</button>
						</Link>
					</div>
			</div>
		</>
	)
}

export default ConfirmationPage;
