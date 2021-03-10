import React from 'react';

//Style and image imports
import './step_one.css';
import ProgressOne from '../../../images/progressone.png';
import HospitalImage from '../../../images/national-cancer-institute.jpg';

//Component import
import ItemForm from '../ItemForm';

const StepOne = ({ setForm, formData, navigation }) => {
	//Destructuring props to use only certain attributes of the formData and naigation object
	const { firstName, lastName, phoneNumber, email } = formData;

	const { next } = navigation;

	return (
		<div className='first-form-wrapper'>
			<div className='progress-bar'>
				{/* display image for ProgressOne */}
				<img
					className='progress-bar'
					src={ProgressOne}
					alt='progress bar step 1'
				/>
			</div>
			<h2 id='register-two'>Register</h2>
			<div className='form-content'>
				{/* display hospitalImage */}
				<img
					className='hospitalimg'
					src={HospitalImage}
					alt='hospital fossad'
				/>
				<ItemForm
					className='firstform'
					placeholder='First Name'
					//useForm takes the name to update the object
					name='firstName'
					//onChange uses setForm to set the formData 
					onChange={setForm}
				/>
			</div>
			<div className='form-content'>
				<ItemForm
					className='firstform'
					placeholder='Last Name'
					name='lastName'
					onChange={setForm}
				/>
			</div>
			<div className='form-content'>
				<ItemForm
					className='firstform'
					placeholder='Phone Number'
					name='phoneNumber'
					onChange={setForm}
				/>
			</div>
			<div className='form-content'>
				<ItemForm
					className='firstform'
					placeholder='Email'
					name='email'
					onChange={setForm}
					/>
			</div>
			<div className='btn-wrapper'>
				<button onClick={next}>Next</button>
			</div>
		</div>
	);
};

export default StepOne;
