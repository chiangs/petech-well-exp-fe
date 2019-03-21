import React from 'react';
import css from './Loader.module.css';

const Loader = () => (
	<div className={css.Spinner}>
		<div className={`${css.SpinnerCircle} ${css.SpinnerCircleOuter}`} />
		<div className={`${css.SpinnerCircle} ${css.SpinnerCircleInner}`} />
		<div className={`${css.SpinnerCircle} ${css.SpinnerCircleSingle1}`} />
		<div className={`${css.SpinnerCircle} ${css.SpinnerCircleSingle2}`} />
		<div className={css.SpinnerText}>
			<p className="bold italic">Loading</p>
		</div>
	</div>
);

export default Loader;
