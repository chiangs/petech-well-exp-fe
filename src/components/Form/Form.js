import React from 'react';
import css from './Form.module.css';
import InputGroup from './InputGroup/InputGroup';

// TODO: add changed prop to InputGroups and handle it
// * Reusable form that takes in a configuration JS object.
const Form = props => {
	// * create list of form elements
	const formElements = [];
	const observations = 2;
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
			<section className={css.Form__FormControls__Observations}>
				{formElements.slice(0, observations).map(element => (
					<InputGroup
						key={element.id}
						show={true}
						configuration={element.config}
						validation={element.validation}
					/>
				))}
			</section>
			<section className={css.Form__FormControls__SupportingDocs}>
				{formElements
					.slice(observations, formElements.length)
					.map(element => (
						<InputGroup
							key={element.id}
							show={true}
							configuration={element.config}
							validation={element.validation}
						/>
					))}
			</section>
			<section className={css.Form__ActionButtons}>
				{/* Copy internal to shared */}
				{/* Save state */}
				{/* Cancel */}
				{/* Submit Exp */}
			</section>
		</form>
	);
};

export default Form;
