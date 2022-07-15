import { ErrorMessage, useField } from 'formik';
import React from 'react';

interface Props {
	label: string;
	name: string;
	type?: 'text' | 'email' | 'password';
	placeholder?: string;
	[x: string]: any;
}

export const MyTextInput = ({ label, type, placeholder, ...props }: Props) => {
	const [field] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className='text-input' {...field} type={type ? type : 'text'} placeholder={placeholder ? placeholder : ''} />
			<ErrorMessage name={props.name} component='span' />
		</>
	);
};
