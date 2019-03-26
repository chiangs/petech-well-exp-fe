import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form/Form';
import FormFilters from '../../components/Form/FormFilters/FormFilters';
import {
	setWell,
	setDiscipline
} from '../../store/newExperience/newExperience.actions';
import * as selectors from '../../store/selectors';
import css from './NewExperience.module.css';
import { disciplineSelector } from './_disciplineSelectorConfig';
import { newExpForm } from './_newExpFormConfig';
import { wellSelector } from './_wellSelectorConfig';
import Loader from '../../components/Loader/Loader';
import InputGroup from '../../components/Form/InputGroup/InputGroup';
import newExperienceReducer from '../../store/newExperience/newExperience.reducers';
import * as actionTypes from '../../store/actionTypes';

class NewExperience extends Component {
	state = {
		wellsList: { ...wellSelector },
		disciplineList: { ...disciplineSelector },
		form: { ...newExpForm }
	};

	// ! Handle going back to none selected
	wellSelectHandler = event => this.props.onSetWell(event);

	disciplineSelectHandler = event => this.props.onSetDiscipline(event);

	render() {
		const formTitle = 'Create new experience';
		const subtitle =
			'You will have a chance to review all fields before final submission for review.';
		const wellSelected = this.props.well;
		const wellSelect = this.state.wellsList ? (
			<InputGroup
				configuration={this.state.wellsList.wells.elementConfig}
				validation={this.state.wellsList.wells.validation}
				changed={this.wellSelectHandler}
			/>
		) : (
			<Loader />
		);

		const disciplineFilter = wellSelected ? (
			<InputGroup
				configuration={
					this.state.disciplineList.disciplines.elementConfig
				}
				validation={this.state.disciplineList.disciplines.validation}
				changed={this.disciplineSelectHandler}
			/>
		) : null;
		// const form = wellSelected ? <Form formConfig={formConfig} /> : null;

		return (
			<article className={css.NewExperience}>
				<section className={css.NewExperience__Title}>
					<h1>{formTitle}</h1>
				</section>
				<section className={css.NewExperience__Subtitle}>
					<h2 className="italic">{subtitle}</h2>
				</section>
				<section>{wellSelect}</section>
				<section className={css.NewExperience__Filters}>
					{disciplineFilter}
				</section>
				{/* <section className={css.NewExperience__Form}>{form}</section> */}
			</article>
		);
	}
}

const mapStateToProps = state => ({
	well: selectors.getWell(state),
	discipline: selectors.getDiscipline(state)
});

const mapDispatchToProps = dispatch => ({
	onSetWell: well => dispatch(setWell(well)),
	onSetDiscipline: discipline => dispatch(setDiscipline(discipline))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewExperience);
