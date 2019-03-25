import React from 'react';
import { buttonTypes } from './_buttonTypes';
import css from './Button.module.css';

const Button = props => {
	const defaultBtn = [buttonTypes.button, buttonTypes.default];
	const btnType =
		props.button.type === 'submit' ? props.button.type : 'button';
	const styledBtn = buttonTypes[props.button.type]
		? [buttonTypes.button, buttonTypes[props.button.type]]
		: null;
	const classes = styledBtn ? styledBtn : defaultBtn;
	const buttonIcon = props.button.icon ? (
		<box-icon
			type={props.button.iconType}
			color={props.button.iconColor}
			name={props.button.icon}
		/>
	) : null;

	return (
		<button
			className={classes.join(' ')}
			onClick={props.btnClick}
			type={btnType}>
			<span className={css.Button__ButtonLabel}>
				{buttonIcon}&nbsp;&nbsp;{props.button.label}
			</span>
		</button>
	);
};

export default Button;
