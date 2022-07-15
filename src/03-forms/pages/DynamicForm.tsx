import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const item of formJson) {
	initialValues[item.name] = item.value;
	if (!item.validations) continue;

	let schema = Yup.string();
	for (const rule of item.validations) {
		if (rule.type === 'required') {
			schema = schema.required('Requerido');
		}

		if (rule.type === 'minLength') {
			schema = schema.min((rule as any).value, `Debe tener al menos ${(rule as any).value} caracteres`);
		}

		if (rule.type === 'email') {
			schema = schema.email('Mail invalido');
		}
	}
	requiredFields[item.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
	return (
		<div>
			<h1>Dynamic Form</h1>

			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				{(formik) => (
					<Form noValidate>
						{formJson.map(({ type, name, placeholder, label, options }) => {
							if (type === 'input' || type === 'password' || type === 'email') {
								return <MyTextInput key={name} type={type as any} name={name} label={label} placeholder={placeholder} />;
							} else if (type === 'select') {
								return (
									<MySelect key={name} label={label} name={name}>
										<option value=''>Select an option</option>
										{options &&
											options.map(({ id, label }) => (
												<option key={id} value={id}>
													{label}
												</option>
											))}
									</MySelect>
								);
							}
							throw new Error(`Tipo ${type} no soportado</span>`);
						})}
						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
