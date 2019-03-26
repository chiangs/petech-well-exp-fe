import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form/Form';
import FormFilters from '../../components/Form/FormFilters/FormFilters';
import WellSelect from '../../components/WellSelect/WellSelect';
import { WELLS } from '../../_utils/constants';
import * as selectors from '../../store/selectors';
import css from './NewExperience.module.css';
import { newExpFilters } from './_newExpFiltersConfig';
import { newExpForm } from './_newExpFormConfig';

class NewExperience extends Component {
	getWells() {
		setTimeout(() => {
			return WELLS;
		}, 1500);
	}

	render() {
		const formTitle = 'Create new experience';
		const subtitle =
			'You will have a chance to review all fields before final submission for review.';
		const filtersConfig = { ...newExpFilters };
		const formConfig = { ...newExpForm };
		const wellsList = this.getWells();
		const wellSelected = this.props.well;
		const form = wellSelected ? (
			<Form formConfig={formConfig} />
		) : (
			<WellSelect wells={wellsList} />
		);

		return (
			<article className={css.NewExperience}>
				<section className={css.NewExperience__Title}>
					<h1>{formTitle}</h1>
				</section>
				<section className={css.NewExperience__Subtitle}>
					<h2 className="italic">{subtitle}</h2>
				</section>
				<section className={css.NewExperience__Filters}>
					<FormFilters filtersConfig={filtersConfig} />
				</section>
				<section className={css.NewExperience__Form}>
					{/* <Form formConfig={formConfig} /> */}
					{form}
				</section>
			</article>
		);
	}
}

const mapStateToProps = state => ({
	well: selectors.getWell(state)
});

export default connect(mapStateToProps)(NewExperience);
