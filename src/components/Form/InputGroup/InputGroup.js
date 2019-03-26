import React from 'react';
import {
	INPUT_TYPES,
	PASSWORD_HIDE,
	PASSWORD_SHOW
} from '../../../_utils/constants';
import Button from '../../Button/Button';
import css from './InputGroup.module.css';

// * Creation of input group is based on having a label configuration
// * this ensures that an input group is properly labeled and structured, otherwise not rendered to DOM

const InputGroup = props => {
	const labelClasses = [css.InputGroup__Label];
	const inputElementClasses = [css.InputGroup__InputElement];
	const passwordToggleText = props.configuration.hidden
		? PASSWORD_SHOW
		: PASSWORD_HIDE;
	// TODO: Add in optional other potential visual signals and styling
	// TODO: Complete classes push for validation feedback
	// const optionLabel = props.shouldValidate.required ? null : (
	//     <i> (optional)</i>
	// );
	// if (!props.valid && props.shouldValidate && props.showErrors) {
	//     labelClasses.push(css.Invalid);
	//     inputClasses.push(css.Invalid);
	// }

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
			onChange={props.configuration.changed}
			id={props.id}
			name={props.id}
		/>
	) : null;

	let inputElement;
	if (label) {
		// * Create the input element type based on props
		switch (props.configuration.type) {
			case INPUT_TYPES.default:
				inputElement = inputElementDefault;
				break;
			case INPUT_TYPES.textarea:
				inputElement = (
					<textarea
						className={inputElementClasses.join(' ')}
						{...props.configuration}
						value={props.value}
						onChange={props.changed}
						id={props.id}
						name={props.name}
						rows="10"
					/>
				);
				break;
			case INPUT_TYPES.select:
				inputElement = (
					<select
						className={inputElementClasses.join(' ')}
						value={props.configuration.value}
						onChange={props.changed}
						id={props.id}
						name={props.name}>
						{props.configuration.options.map(option => (
							<option key={option.value} value={option.value}>
								{option.displayValue}
							</option>
						))}
					</select>
				);
				break;
			case INPUT_TYPES.password:
				inputElement = (
					<span className={css.PasswordInput}>
						<input
							className={inputElementClasses.join(' ')}
							value={props.value}
							onChange={props.changed}
							id={props.id}
							name={props.name}
							type={
								props.elementConfig.hidden
									? props.elementType
									: INPUT_TYPES.text
							}
						/>
						<Button
							type="button"
							passwordToggle={true}
							clicked={props.togglePassword}>
							{passwordToggleText}
						</Button>
					</span>
				);
				break;
			default:
				inputElement = inputElementDefault;
				break;
		}
	}

	// * Create the input group or null
	const inputGroup =
		label && inputElement ? (
			<div className={css.InputGroup}>
				{labelGroup}
				{inputElement}
			</div>
		) : null;

	return inputGroup;
};

export default InputGroup;
