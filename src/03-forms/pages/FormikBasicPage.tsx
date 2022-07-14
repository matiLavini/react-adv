import { FormikErrors, useFormik } from 'formik';
import React from 'react';
import '../styles/styles.css';

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
}

export const FormikBasicPage = () => {
	const validate = ({ firstName, lastName, email }: FormValues) => {
		const errors: FormikErrors<FormValues> = {};

		if (!firstName) {
			errors.firstName = 'Required';
		} else if (firstName.length > 15) {
			errors.firstName = 'Must be 15 characters or less';
		}

		if (!lastName) {
			errors.lastName = 'Required';
		} else if (lastName.length > 10) {
			errors.lastName = 'Must be 10 characters or less';
		}

		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!email) {
			errors.email = 'Required';
		} else if (!re.test(email)) {
			errors.email = 'Invalid email address';
		}

		return errors;
	};

	const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validate,
	});

	return (
		<div>
			<h1>Formik Tutorial Basico</h1>
			<form onSubmit={handleSubmit} noValidate>
				<label htmlFor='firstName'>First Name</label>
				<input type='text' name='firstName' onBlur={handleBlur} onChange={handleChange} value={values.firstName} />
				{touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

				<label htmlFor='lastName'>Last Name</label>
				<input type='text' name='lastName' onBlur={handleBlur} onChange={handleChange} value={values.lastName} />
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor='email'>Email</label>
				<input type='email' name='email' onBlur={handleBlur} onChange={handleChange} value={values.email} />
				{touched.email && errors.email && <span>{errors.email}</span>}

				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
