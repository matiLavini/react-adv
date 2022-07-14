import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import '../styles/styles.css';

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
}

export const FormikComponents = () => {
	return (
		<div>
			<h1>FormikComponents</h1>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
					lastName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
					email: Yup.string().email('Mail invalido').required('Requerido'),
					terms: Yup.boolean().oneOf([true], 'Debe aceptar los terminos y condiciones'),
					jobType: Yup.string().required('Requerido').notOneOf([''], 'Debee seleccionar un Job Type'),
				})}
			>
				{() => (
					<Form>
						<label htmlFor='firstName'>First Name</label>
						<Field name='firstName' type='text' />
						<ErrorMessage name='firstName' component='span' />

						<label htmlFor='lastName'>Last Name</label>
						<Field name='lastName' type='text' />
						<ErrorMessage name='lastName' component='span' />

						<label htmlFor='email'>Email</label>
						<Field name='email' type='text' />
						<ErrorMessage name='email' component='span' />

						<label htmlFor='jobType'>Job Type</label>
						<Field name='jobType' as='select'>
							<option value=''>Choose a Job Type</option>
							<option value='DEV'>Developer</option>
							<option value='DES'>Designer</option>
							<option value='ITM'>IT Manager</option>
						</Field>
						<ErrorMessage name='jobType' component='span' />

						<label>
							<Field name='terms' type='checkbox' />
							Terms and Conditions
						</label>
						<ErrorMessage name='terms' component='span' />

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
