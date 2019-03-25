import React, { Component } from 'react';
import css from './NewExperience.module.css';
import Form from '../../components/Form/Form';
import { newExpForm } from './_newExpFormConfig';

export default class NewExperience extends Component {
	render() {
		const formTitle = 'Create new experience';
		const subtitle = 'Subtitle placeholder text.';
		const formConfig = newExpForm;

		return (
			<article className={css.NewExperience}>
				<section className={css.NewExperience__Title}>
					<h1>{formTitle}</h1>
				</section>
				<section className={css.NewExperience__Subtitle}>
					<h2>{subtitle}</h2>
				</section>
				<section className={css.NewExperience__Form}>
					<Form formConfig={formConfig} />
				</section>
			</article>
		);
	}
}
