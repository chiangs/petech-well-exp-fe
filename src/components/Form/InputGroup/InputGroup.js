import React, { useState } from 'react';
import { INPUT_TYPES } from '../../../_utils/constants';
import css from './InputGroup.module.css';

// * Creation of input group is based on having a label configuration
// * this ensures that an input group is properly labeled and structured, otherwise not rendered to DOM

const InputGroup = props => {
	const labelClasses = [css.InputGroup__Label];
	const inputElementClasses = [css.InputGroup__InputElement];
	const disabledLabelClasses = labelClasses.concat(css.Disabled);
	const disabledInputClasses = inputElementClasses.concat(css.Disabled);

	let inputGroup = (
		<div className={css.InputGroup}>
			<label className={css.InputGroup__LabelGroup}>
				<span className={disabledLabelClasses.join(' ')}>
					Loading...
				</span>
				<span className={(css.InputGroup__Hint, css.Disabled)}>
					Please complete the previous step to load
				</span>
			</label>
			<input className={disabledInputClasses.join(' ')} disabled />
		</div>
	);

	if (!props.disabled) {
		// * Uses hook to update local state and then signal container to dispatch
		const initialValue =
			props.configuration.type === INPUT_TYPES.select
				? props.configuration.options[0].id
				: props.configuration.value;

		const [value, newValue] = useState(initialValue);

		const inputChangeHandler = event => {
			let updatedValue;
			if (props.configuration.type === INPUT_TYPES.select) {
				updatedValue =
					event.target.value > 0 ? +event.target.value : +value;
				const optionItem = props.configuration.options.find(
					item => item.id === updatedValue
				);
				newValue(updatedValue);
				return props.changed(optionItem);
			} else {
				const formElementId = event.target.id;
				updatedValue = event.target.value;
				newValue(updatedValue);
				props.changed(updatedValue, formElementId);
			}
		};

		// * Define the label
		const label =
			props.configuration.label.length > 0 ? (
				<span className={labelClasses.join(' ')}>
					{props.configuration.label}
				</span>
			) : null;

		//* Define the hint
		const hint =
			label && props.configuration.hint.length > 0 ? (
				<span className={css.InputGroup__Hint}>
					{props.configuration.hint}
				</span>
			) : null;

		// * Create the label group if props available
		const labelGroup = label ? (
			<label
				className={css.InputGroup__LabelGroup}
				htmlFor={props.id}
				id={props.id}
				name={props.id}>
				{label}
				{hint}
			</label>
		) : null;

		// * Define the default input element
		const inputElementDefault = label ? (
			<input
				className={inputElementClasses.join(' ')}
				{...props.configuration}
				value={props.configuration.value}
				onChange={inputChangeHandler}
				id={props.id}
				name={props.id}
			/>
		) : null;

		const textArea = props => (
			<textarea
				className={inputElementClasses.join(' ')}
				{...props.configuration}
				value={props.configuration.value}
				onChange={inputChangeHandler}
				id={props.id}
				name={props.id}
				rows="10"
			/>
		);

		const selectOption = props => (
			<select
				className={inputElementClasses.join(' ')}
				value={value}
				onChange={inputChangeHandler}
				id={props.id}
				name={props.id}>
				{props.configuration.options.map(option => {
					const optionClass = [css.Select__Option];
					const optionClasses = option.required
						? optionClass.concat(css.Required)
						: optionClass;
					return (
						<option
							key={option.id}
							value={option.id}
							className={optionClasses.join(' ')}>
							{option.displayValue}
						</option>
					);
				})}
			</select>
		);

		let inputElement;
		if (label) {
			// * Create the input element type based on props
			switch (props.configuration.type) {
				case INPUT_TYPES.default:
					inputElement = inputElementDefault;
					break;
				case INPUT_TYPES.textarea:
					inputElement = textArea(props);
					break;
				case INPUT_TYPES.select:
					inputElement = selectOption(props);
					break;
				default:
					inputElement = inputElementDefault;
					break;
			}
		}

		// * Create the input group or null
		inputGroup =
			label && inputElement ? (
				<div className={css.InputGroup}>
					{labelGroup}
					{inputElement}
				</div>
			) : null;
	}

	return inputGroup;
};

export default InputGroup;
