import React from 'react';
import css from './Form.module.css';
import InputGroup from './InputGroup/InputGroup';
import Button from '../Button/Button';

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
	const copyBtn =
		props.copyBtn && props.copyBtnConfig ? (
			<Button
				className={css.Observations__CopyBtnSection__Button}
				button={props.copyBtnConfig}
				btnClick={props.copyExternal}
			/>
		) : null;

	// * create list of buttons to render
	return (
		<form className={css.Form}>
			<section className={css.Form__FormControls__Observations}>
				{formElements.slice(0, observations).map(element => {
					return (
						<InputGroup
							key={element.id}
							id={element.id}
							configuration={element.config}
							validation={element.validation}
							changed={props.changed}
						/>
					);
				})}
				<section className={css.Observations__CopyBtnSection}>
					{copyBtn}
				</section>
				<section className={css.Observations__Placeholder} />
			</section>
			<section className={css.Form__FormControls__SupportingDocs}>
				{formElements
					.slice(observations, formElements.length)
					.map(element => (
						<InputGroup
							key={element.id}
							configuration={element.config}
							validation={element.validation}
						/>
					))}
			</section>
			<section className={css.Form__ActionButtons}>
				{/* Save state */}
				{/* Cancel */}
				{/* Submit Exp */}
			</section>
		</form>
	);
};

export default Form;
