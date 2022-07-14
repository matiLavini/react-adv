import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {
	const { name, email, password1, password2, onChange, resetForm, isValidEmail } = useForm({
		name: '',
		email: '',
		password1: '',
		password2: '',
	});

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<div>
			<h1>Register Page</h1>
			<form noValidate onSubmit={onSubmit}>
				<input type='text' name='name' placeholder='Name' value={name} onChange={onChange} className={`${name.trim().length <= 0 && 'has-error'}`} />
				{name.trim().length <= 0 && <span>* Este campo es obligatorio</span>}
				<input type='email' name='email' placeholder='Email' value={email} onChange={onChange} className={`${!isValidEmail(email) && 'has-error'}`} />
				{!isValidEmail(email) && <span>* El mail no es válido</span>}
				<input type='password' name='password1' placeholder='Password' value={password1} onChange={onChange} />
				{password1.trim().length <= 0 && <span>* Este campo es obligatorio</span>}
				{password1.trim().length < 6 && password1.trim().length > 0 && <span>* La contraseña debe tener al menos 6 caracteres</span>}
				<input type='password' name='password2' placeholder='Repeat password' value={password2} onChange={onChange} />
				{password2.trim().length <= 0 && <span>* Este campo es obligatorio</span>}
				{password2.trim().length > 0 && password1 !== password2 && <span>* Las contraseñas deben ser iguales</span>}
				<button type='submit'>Create</button>
				<button onClick={resetForm}>Reset</button>
			</form>
		</div>
	);
};
