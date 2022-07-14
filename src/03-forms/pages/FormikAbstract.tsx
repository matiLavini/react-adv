import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { MySelect, MyTextInput, MyToggle } from '../components';

import '../styles/styles.css';

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
}

export const FormikAbstract = () => {
	return (
		<div>
			<h1>FormikAbstract</h1>
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
						<MyTextInput label={'First Name'} name={'firstName'} />
						<MyTextInput label={'Last Name'} name={'lastName'} />
						<MyTextInput label={'Email'} name={'email'} type={'email'} />
						<MySelect label={'Job Type'} name='jobType'>
							<option value=''>Choose a Job Type</option>
							<option value='DEV'>Developer</option>
							<option value='DES'>Designer</option>
							<option value='ITM'>IT Manager</option>
						</MySelect>
						<MyToggle label={'Terms and Conditions'} name={'terms'} type={'checkbox'} />

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
