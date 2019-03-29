import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import InputGroup from '../../components/Form/InputGroup/InputGroup';
import Loader from '../../components/Loader/Loader';
import {
	setCurrTopic,
	setDiscipline,
	setWell,
	clearState
} from '../../store/newExperience/newExperience.actions';
import * as selectors from '../../store/selectors';
import api from '../../_services/Api';
import { TOPICS } from '../../_utils/constants';
import css from './NewExperience.module.css';
import { disciplineSelect } from './_disciplineSelectorConfig';
import { newExpForm } from './_newExpFormConfig';
import { topicSelectConfig } from './_topicSelectorConfig';
import { wellSelect } from './_wellSelectorConfig';
import { withRouter } from 'react-router-dom';
import EquinorPointer from '../../components/EquinorPointer/EquinorPointer';

// TODO: start over btn
// TODO: handle well change
// TODO: handle topic change
class NewExperience extends Component {
	state = {
		externalAvailable: null,
		internalOnly: null,
		buttons: {
			copyBtnConfig: {
				label: 'Copy text to internal',
				type: 'default',
				icon: 'paste',
				iconType: 'solid',
				iconColor: 'var(--black)'
			}
		}
	};
	componentDidMount() {
		// * temporary to simulate request latency
		// ! Update the baseUrl and timeout number before demo
		// ! Need to memoize or store this request for nav back and forth
		api.get('').then(res => {
			setTimeout(() => {
				this.setState({
					wellsList: { ...wellSelect },
					disciplinesList: { ...disciplineSelect },
					topicsList: [...TOPICS],
					formConfig: { ...newExpForm }
				});
			}, 1000);
		});
	}

	navTo(route) {
		this.props.onClearState();
		this.props.history.push(route);
	}

	createDisciplineSelect = (disciplinesList, wellsList, topicsList) =>
		disciplinesList && wellsList && topicsList ? (
			<InputGroup
				id="disciplineSelect"
				configuration={
					this.state.disciplinesList.disciplines.elementConfig
				}
				validation={this.state.disciplinesList.disciplines.validation}
				changed={this.disciplineSelectHandler}
			/>
		) : (
			<Loader />
		);

	createWellSelect = wellsList =>
		wellsList && this.props.discipline ? (
			<InputGroup
				id="wellBoreSelect"
				configuration={this.state.wellsList.wells.elementConfig}
				validation={this.state.wellsList.wells.validation}
				changed={this.wellSelectHandler}
			/>
		) : (
			<InputGroup disabled />
		);

	createTopicsSelect = topicsList =>
		this.props.well && topicsList ? (
			<InputGroup
				id="topicsSelect"
				configuration={
					topicSelectConfig(topicsList).topics.elementConfig
				}
				validation={topicSelectConfig(topicsList).topics.validation}
				changed={this.topicsSelectHandler}
			/>
		) : (
			<InputGroup disabled />
		);

	createForm = config => {
		let formConfig = { ...config };
		if (this.state.externalAvailable !== null) {
			formConfig.externalAvailable.elementConfig.value = this.state.externalAvailable;
			formConfig.internalOnly.elementConfig.value = this.state.internalOnly;
		}
		return formConfig && this.props.currTopic ? (
			<Form
				formConfig={formConfig}
				changed={this.formChangeHandler}
				copyBtn
				copyBtnConfig={this.state.buttons.copyBtnConfig}
				copyExternal={this.copyExternalHandler}
			/>
		) : null;
	};

	createStartOverButton = btnConfig =>
		this.props.discipline ? (
			<Button
				button={btnConfig}
				btnClick={() => this.navTo(btnConfig.route)}
			/>
		) : null;

	// * Form select event handlers, observations are saved locally until submit/save
	disciplineSelectHandler = value => this.props.onSetDiscipline(value);
	wellSelectHandler = value =>
		this.props.onSetWell(value, this.props.discipline);
	topicsSelectHandler = value => this.props.onSetCurrTopic(value);
	formChangeHandler = (value, elementId) =>
		this.setState({ [elementId]: value });
	copyExternalHandler = () =>
		this.setState({ internalOnly: this.state.externalAvailable });

	render() {
		const formTitle = 'Add experiences';
		const subtitle =
			'You will have a chance to review all fields before final submission for review.';

		const disciplineSelect = this.props.discipline ? (
			<h3 className={css.SelectedDiscipline}>
				<span className={css.SelectedDiscipline__Label}>
					Selected discipline:{' '}
				</span>
				<span className={css.SelectedDiscipline__Discipline}>
					{this.props.discipline.displayValue}
				</span>
			</h3>
		) : (
			this.createDisciplineSelect(
				this.state.disciplinesList,
				this.state.wellsList,
				this.state.topicsList
			)
		);
		const startOverBtn = this.createStartOverButton({
			label: 'Start over',
			type: 'cancel',
			icon: 'revision',
			iconColor: 'var(--equinor-supporting-blue-light)',
			route: '/'
		});
		const wellSelect = this.createWellSelect(this.state.wellsList);
		const topicSelect = this.createTopicsSelect(this.props.topics);
		const formFilterSection = this.props.discipline ? (
			<section className={css.NewExperience__Filters}>
				{wellSelect}
				{topicSelect}
			</section>
		) : null;
		const form = this.createForm(this.state.formConfig);

		return (
			<article className={css.NewExperience}>
				<section className={css.NewExperience__Title}>
					<EquinorPointer />
					<h1>{formTitle}</h1>
				</section>
				<section className={css.NewExperience__Subtitle}>
					<h2 className="italic">{subtitle}</h2>
				</section>
				<section className={css.NewExperience__Filters}>
					{disciplineSelect}
					{startOverBtn}
				</section>
				{formFilterSection}
				<section className={css.NewExperience__FormSection}>
					{form}
				</section>
			</article>
		);
	}
}

const mapStateToProps = state => ({
	well: selectors.getWell(state),
	discipline: selectors.getDiscipline(state),
	currTopic: selectors.getCurrTopic(state),
	topics: selectors.getTopics(state)
});

const mapDispatchToProps = dispatch => ({
	onSetWell: (well, discipline) => dispatch(setWell(well, discipline)),
	onSetDiscipline: discipline => dispatch(setDiscipline(discipline)),
	onSetCurrTopic: topic => dispatch(setCurrTopic(topic)),
	onClearState: () => dispatch(clearState())
});

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(NewExperience)
);
