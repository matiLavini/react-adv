import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik Page</h1>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password1: '',
					password2: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string().min(2, 'El nombre debe tener mas de 2 letras').max(15, 'El nombre debe tener menos de 15 caracteres').required('Requerido'),
					email: Yup.string().email('Mail invalido').required('Requerido'),
					password1: Yup.string().required('Requerido').min(6, 'Debe contener al menos 6 caracteres'),
					password2: Yup.string()
						.required('Requerido')
						.oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden'),
				})}
			>
				{({ handleReset }) => (
					<Form>
						<MyTextInput label='Nombre' name='name' />
						<MyTextInput label='Email' name='email' />
						<MyTextInput label='Password' name='password1' type='password' />
						<MyTextInput label='Repetir Password' name='password2' type='password' />

						<button type='submit'>Create</button>
						<button onClick={handleReset}>Reset</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
