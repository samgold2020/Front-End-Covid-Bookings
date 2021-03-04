import React from 'react';
import './name.css';
import ProgressOne from '../../images/progressone.png';
import ItemForm from './ItemForm';
import HospitalImage from '../../images/national-cancer-institute.jpg';

const Name = ({ setForm, formData, navigation }) => {
	const { firstName, lastName, phoneNumber, email } = formData;
	//destructuring props and using only certain attributes of the formData and naigation object

	const { next } = navigation;

	return (
		<div className='first-form-wrapper'>
			<div className='progress-bar'>
				<img
					className='progress-bar'
					src={ProgressOne}
					alt='progress bar step 1'
				/>
			</div>
			<h2>Register</h2>
			<div className='form-content'>
				<img
					className='hospitalimg'
					src={HospitalImage}
					alt='hospital fossad'
				/>
				<ItemForm
					className='firstform'
					placeholder='First Name'
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

export default Name;
