import React, { useEffect } from 'react';
import css from './Form.module.css';
import InputGroup from './InputGroup/InputGroup';
import Button from '../Button/Button';

// TODO: add changed prop to InputGroups and handle it
// * Reusable form that takes in a configuration JS object.
const Form = props => {
	useEffect(() => {
		const footer = document.getElementById('footer');
		setTimeout(() => {
			footer.scrollIntoView({ behavior: 'smooth' });
		}, 200);
	});

	// * create list of form elements
	const formElements = [];
	const observations = 2;
	const overallExperience = 6;
	const saveBtnConfig = {
		label: 'Save',
		type: 'submit',
		icon: 'save',
		iconColor: 'var(--white)'
	};
	const reviewBtnConfig = {
		label: 'Review entries',
		type: 'warning',
		icon: 'list-check',
		iconColor: 'var(--white)',
		route: '/review'
	};

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
				button={props.copyBtnConfig}
				btnClick={props.copyExternal}
			/>
		) : null;

	const saveBtn = (
		<Button button={saveBtnConfig} btnClick={props.saveExperienceHandler} />
	);

	const reviewBtn = (
		<Button
			button={reviewBtnConfig}
			btnClick={() => props.reviewHandler(reviewBtnConfig.route)}
		/>
	);

	// * create list of buttons to render
	return (
		<form className={css.Form}>
			<section className={css.Form__FormControls__Tags}>
				{formElements
					.slice(overallExperience, formElements.length)
					.map(element => (
						<InputGroup
							key={element.id}
							id={element.id}
							configuration={element.config}
							validation={element.validation}
							changed={props.changed}
						/>
					))}
			</section>
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
					.slice(observations, overallExperience)
					.map(element => (
						<InputGroup
							key={element.id}
							id={element.id}
							configuration={element.config}
							validation={element.validation}
							changed={props.changed}
						/>
					))}
			</section>

			<section className={css.Form__ActionButtons}>
				{saveBtn}
				{reviewBtn}
			</section>
		</form>
	);
};

export default Form;
