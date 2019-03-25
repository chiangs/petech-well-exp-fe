import React from 'react';
import { buttonTypes } from './_buttonTypes';

const Button = props => {
	const defaultBtn = [buttonTypes.button, buttonTypes.default];
	const styledBtn = buttonTypes[props.btnType]
		? [buttonTypes.button, buttonTypes[props.btnType]]
		: null;
	const classes = styledBtn ? styledBtn : defaultBtn;

	return (
		<React.Fragment>
			<button className={classes.join(' ')} onClick={props.btnClick}>
				{props.label}
			</button>
		</React.Fragment>
	);
};

export default Button;
