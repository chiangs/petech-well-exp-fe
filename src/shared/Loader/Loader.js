import React from 'react';
import css from './Loader.module.css';

const Loader = () => (
	<section className={css.LoaderContainer}>
		<div className={css.Loader}>
			<div className={`${css.LoaderCircle} ${css.LoaderCircleOuter}`} />
			<div className={`${css.LoaderCircle} ${css.LoaderCircleInner}`} />
			<div className={`${css.LoaderCircle} ${css.LoaderCircleSingle1}`} />
			<div className={`${css.LoaderCircle} ${css.LoaderCircleSingle2}`} />
			<div className={css.LoaderText}>
				<p className="bold italic">Loading</p>
			</div>
		</div>
	</section>
);

export default Loader;
