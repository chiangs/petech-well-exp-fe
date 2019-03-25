import React from 'react';
import css from './Form.module.css';
import InputGroup from './InputGroup/InputGroup';

// * Reusable form that takes in a configuration JS object.
const Form = props => {
	// * create list of form elements
	const formElements = [];
	for (const key in props.formConfig) {
		formElements.push({
			id: key,
			config: props.formConfig[key].elementConfig,
			validation: props.formConfig[key].validation
		});
	}

	// * create list of buttons to render
	return (
		<form className={css.Form}>
			<section className={css.Form__FormControls}>
				{formElements.map(element => (
					<InputGroup
						key={element.id}
						show={true}
						configuration={element.config}
						validation={element.validation}
					/>
				))}
			</section>
			<section className={css.Form__ActionButtons} />
		</form>
	);
};

export default Form;
