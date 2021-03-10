import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
//CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ onChange }) => {
	//useState uses setStartDate to pass a long a new Date() object into the date picker
	const [startDate, setStartDate] = useState(new Date());
	return (
		<DatePicker
			selected={startDate}
			onChange={(date) => {
				setStartDate(date);
				onChange({
					target: {
						name: 'date',
						value: date,
					},
				});
			}}
			showTimeSelect
			dateFormat='Pp'
			withPortal
		/>
	);
};

export default Calendar;
