import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputGroup from '../../components/Form/InputGroup/InputGroup';
import Loader from '../../components/Loader/Loader';
import {
	setDiscipline,
	setWell
} from '../../store/newExperience/newExperience.actions';
import * as selectors from '../../store/selectors';
import css from './NewExperience.module.css';
import { disciplineSelector } from './_disciplineSelectorConfig';
import { newExpForm } from './_newExpFormConfig';
import { wellSelector } from './_wellSelectorConfig';
import Form from '../../components/Form/Form';

class NewExperience extends Component {
	state = {
		wellsList: { ...wellSelector },
		disciplineList: { ...disciplineSelector },
		formConfig: { ...newExpForm }
	};

	wellSelectHandler = event => this.props.onSetWell(event);
	disciplineSelectHandler = event => this.props.onSetDiscipline(event);

	render() {
		const formTitle = 'Create new experience';
		const subtitle =
			'You will have a chance to review all fields before final submission for review.';
		const wellSelect = this.state.wellsList ? (
			<InputGroup
				configuration={this.state.wellsList.wells.elementConfig}
				validation={this.state.wellsList.wells.validation}
				changed={this.wellSelectHandler}
			/>
		) : (
			<Loader />
		);

		const disciplineSelect = this.props.well ? (
			<InputGroup
				configuration={
					this.state.disciplineList.disciplines.elementConfig
				}
				validation={this.state.disciplineList.disciplines.validation}
				changed={this.disciplineSelectHandler}
			/>
		) : null;

		const form =
			this.props.well && this.props.discipline ? (
				<Form formConfig={this.state.formConfig} />
			) : null;

		return (
			<article className={css.NewExperience}>
				<section className={css.NewExperience__Title}>
					<h1>{formTitle}</h1>
				</section>
				<section className={css.NewExperience__Subtitle}>
					<h2 className="italic">{subtitle}</h2>
				</section>
				<section className={css.NewExperience__Filters}>
					{wellSelect}
					{disciplineSelect}
				</section>
				<section className={css.NewExperience__Form}>{form}</section>
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
