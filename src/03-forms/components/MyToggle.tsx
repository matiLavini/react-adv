import { useField, ErrorMessage } from 'formik';
import { type } from 'os';
import React from 'react';

interface Props {
	label: string;
	name: string;
	type: 'checkbox' | 'radio';
	[x: string]: any;
}

export const MyToggle = ({ label, type, ...props }: Props) => {
	const [field] = useField(props);

	return (
		<>
			<label>
				<input className='text-input' type={type} {...field} {...props} />
				{label}
			</label>
			<ErrorMessage name={props.name} component='span' />
		</>
	);
};
