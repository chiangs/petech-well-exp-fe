import React from 'react';
import css from './Button.module.css';

const Button = props => {
	const buttonTypes = {
		button: css.Button,
		default: css.Default,
		submit: css.Submit,
		cance: css.Cancel,
		warning: css.Warning
	};
	const defaultBtn = [buttonTypes.button, buttonTypes.default];
	const styledBtn = buttonTypes[props.btnType]
		? [buttonTypes.button, buttonTypes[props.btnType]]
		: null;
	const classes = styledBtn ? styledBtn : defaultBtn;

	return (
		<React.Fragment>
			<button className={classes.join(' ')}>{props.label}</button>
		</React.Fragment>
	);
};

export default Button;
