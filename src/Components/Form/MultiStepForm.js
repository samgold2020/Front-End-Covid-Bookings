import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';
//useStep is used to simplify the multi-page input form, more information can be found here: https://www.npmjs.com/package/react-hooks-helper

//child components to be passed in as steps
import Name from './Name';
import AppointmentForm from './AppointmentForm';
import Review from './Review';
import ConfirmationPage from './Confirmation';

//using the useStep hooks helper we are passing the key "steps" an array consisting of steps. 
//Throughout the form we will use "previous" and "next" to manually move through the form. 
const steps = [
	{ id: 'name' },
	{ id: 'appointmentform' },
	{ id: 'review' },
	{ id: 'confirmationpage' },
];

//created a defaultData object to set each datatype as an empty string
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

	//since the defaultData is stored in formData I needed to pass that to each component step in the 
	//multistep form, I also need to use setForm and navigation for previous & next,
	//so I decided to pass them via props down to the child components
	const props = { formData, setForm, navigation };
	// console.log("props", props)

	switch (id) {
		case 'name':
			return <Name {...props} />;
		case 'appointmentform':
			return <AppointmentForm {...props} />;
		case 'review':
			return <Review {...props} />;
		case 'confirmationpage':
			return <ConfirmationPage {...props} />;
		default:
			return null;
	}
};

export default MultiStepForm;
