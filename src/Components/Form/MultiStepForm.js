import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';
//useStep and useForm is used to simplify navigation in the multi-page -
//input form as well as store form data in a useForm object https://www.npmjs.com/package/react-hooks-helper

//Child components of the MultiStepForm
import StepOne from './FirstForm/StepOne';
import StepTwo from './SecondForm/StepTwo';
import StepThree from './ThirdForm/StepThree';
import Confirmation from './Confirmation';

//Passing "steps" an array consisting of ordered steps to be rendered 
const steps = [
	{ id: 'one' },
	{ id: 'two' },
	{ id: 'three' },
	{ id: 'confirmation' },
];

//defaultData object to initiate each datatype value as an empty string. 
const defaultData = {
	firstName: '',
	lastName: '',
	phoneNumber: '',
	email: '',
	hospital: '',
};

const MultiStepForm = () => {
	//formData contains the empty defaultData object
	const [ formData, setForm ] = useForm(defaultData);

	//setting the return object to the current steps object, and the navigation object which contains-
	//callback functions for previous and next item in the index
	const { step, navigation } = useStep({ initialStep: 0, steps });
	const { id } = step;

	//In each step of the MultiStepForm we need to pass the formData defaultData, 
	//set it with setForm, and pass navigation to move forward and backward through the form.
	const props = { formData, setForm, navigation };

	switch (id) {
		case 'one':
			//Sending destructured props to each child component so as to unpack values for setForm
			return <StepOne {...props} />;
		case 'two':
			return <StepTwo {...props} />;
		case 'three':
			return <StepThree {...props} />;
		case 'confirmation':
			return <Confirmation />;
		default:
			return null;
	}
};

export default MultiStepForm;
