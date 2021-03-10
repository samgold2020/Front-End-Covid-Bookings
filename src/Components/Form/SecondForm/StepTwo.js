import React from 'react';

//Style and Image imports
import './step_two.css';
import HospitalImage from '../../../images/national-cancer-institute.jpg';
import ProgressBarTwo from '../../../images/progresstwo.png';

//Component imports
import StateDropHospitals from '../StatedropHospitals';
import Calendar from '../Calendar';

const StepTwo = ({ setForm, formData, navigation }) => {
	const { date, hospital } = formData;

	const { previous, next } = navigation;

	return (
		<div className='appointment-container'>
			<div className='appointment-wrapper'>
			<div className="progress-bar-two">
			<img className="progress-bar-two" src={ProgressBarTwo} alt="progress bar step 2" />
			</div>
				<h2 id='register-two'>Register</h2>
				<img
					className='hospitalimg'
					src={HospitalImage}
					alt='hospital fossad'
				/>

				<div className='appointment-content'>
					<div className='time-container'>
						<div className='hospital-container'>
							<StateDropHospitals
								className='hospital-field'
								placeholder="Choose a Hospital"
								name='hospital'
								onChange={setForm}
							/>
						</div>
					</div>
					<Calendar
						className='calendar-widget'
						label='date'
						name='date'
						value={date}
						onChange={setForm}
					/>
				</div>
				<div className='btn-container'>
					<button className='previousbtn' onClick={previous}>
						Previous
					</button>
					<button className='nextbtn' onClick={next}>
						Next
					</button>
				</div>
					<div className='space'></div>
			</div>
		</div>
	);
};

export default StepTwo;
