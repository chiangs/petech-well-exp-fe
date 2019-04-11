import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../../shared/Button';
import EquinorPointer from '../../shared/EquinorPointer';
import Form from '../../shared/Form';
import InputGroup from '../../shared/Form/InputGroup/InputGroup';
import Loader from '../../shared/Loader';
import * as selectors from './index';
import api from '../../_services/Api';
import { TOPICS } from '../../_utils/constants';
import css from './NewExperience.module.css';
import {
	clearState,
	setCurrTopic,
	setDiscipline,
	setWell
} from './store/newExperience.actions';
import { disciplineSelect } from './_config/_disciplineSelectorConfig';
import { newExpForm } from './_config/_newExpFormConfig';
import { topicSelectConfig } from './_config/_topicSelectorConfig';
import { wellSelect } from './_config/_wellSelectorConfig';
import { newExpFilter } from './_config/_filterConfig';

class NewExperience extends Component {
	state = {
		formTitle: 'Add experiences',
		subtitle:
			'You will have a chance to review all fields before final submission for review.',
		externalAvailable: null,
		internalOnly: null,
		filterInstructions:
			'Must select at least one Section, Formation, Operation, or Depth',
		buttons: {
			startOverBtn: {
				label: 'Start over',
				type: 'cancel',
				icon: 'revision',
				iconColor: 'var(--grey-dark)',
				route: '/'
			},
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
					filtersList: { ...newExpFilter },
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

	// * NOTES:
	/**
	 * 1. Create selectors Discipline, Wellbore, Topic
	 * 2. Create filters Section, Formation, Operation, Depth
	 * 3. Retrieve and memoize matching entries
	 * 4. Create form
	 */
	// * Create Selects
	createDisciplineSelect = (disciplinesList, wellsList, topicsList) =>
		disciplinesList && wellsList && topicsList ? (
			<InputGroup
				id='disciplineSelect'
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
				id='wellBoreSelect'
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
				id='topicsSelect'
				configuration={
					topicSelectConfig(topicsList).topics.elementConfig
				}
				validation={topicSelectConfig(topicsList).topics.validation}
				changed={this.topicsSelectHandler}
			/>
		) : (
			<InputGroup disabled />
		);

	createStartOverButton = btnConfig =>
		this.props.discipline ? (
			<Button
				button={btnConfig}
				btnClick={() => this.navTo(btnConfig.route)}
			/>
		) : null;

	// * Create Filters
	createSectionFilter = () =>
		this.props.well && this.props.currTopic ? (
			<InputGroup
				id='sectionsFilter'
				configuration={this.state.filtersList.section.elementConfig}
				validation={this.state.filtersList.section.validation}
				// changed={this.topicsSelectHandler}
			/>
		) : (
			<InputGroup disabled />
		);

	createFormationFilter = () =>
		this.props.well && this.props.currTopic ? (
			<InputGroup
				id='sectionsFilter'
				configuration={this.state.filtersList.formation.elementConfig}
				validation={this.state.filtersList.formation.validation}
				// changed={this.topicsSelectHandler}
			/>
		) : (
			<InputGroup disabled />
		);

	createOperationFilter = () =>
		this.props.well && this.props.currTopic ? (
			<InputGroup
				id='sectionsFilter'
				configuration={this.state.filtersList.operation.elementConfig}
				validation={this.state.filtersList.operation.validation}
				// changed={this.topicsSelectHandler}
			/>
		) : (
			<InputGroup disabled />
		);

	createDepthFilter = () =>
		this.props.well && this.props.currTopic ? (
			<InputGroup
				id='sectionsFilter'
				configuration={this.state.filtersList.depth.elementConfig}
				validation={this.state.filtersList.depth.validation}
				// changed={this.topicsSelectHandler}
			/>
		) : (
			<InputGroup disabled />
		);

	// * Create Form
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
				reviewHandler={this.reviewHandler}
			/>
		) : null;
	};

	// * Form select event handlers, observations are saved locally until submit/save
	// * Select handlers
	disciplineSelectHandler = value => this.props.onSetDiscipline(value);
	wellSelectHandler = value =>
		this.props.onSetWell(value, this.props.discipline);
	topicsSelectHandler = value => this.props.onSetCurrTopic(value);
	// TODO: Filter handlers
	// sectionFilterHandler
	// formationFilterHandler
	// operatoinFilterHandler
	// depthFilterHandler
	// * Form related handlers
	formChangeHandler = (value, elementId) =>
		this.setState({ [elementId]: value });
	copyExternalHandler = () =>
		this.setState({ internalOnly: this.state.externalAvailable });
	// saveExperienceHandler;
	reviewHandler = route => this.props.history.push(route);

	render() {
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
		const startOverBtn = this.createStartOverButton(
			this.state.buttons.startOverBtn
		);
		const wellSelect = this.createWellSelect(this.state.wellsList);
		const topicSelect = this.createTopicsSelect(this.props.topics);
		const sectionFilter = this.createSectionFilter(this.state.filtersList);
		const formationFilter = this.createFormationFilter(
			this.state.filtersList
		);
		const operationFilter = this.createOperationFilter(
			this.state.filtersList
		);
		const depthFilter = this.createDepthFilter(this.state.filtersList);
		const formFilterSection = this.props.discipline ? (
			<React.Fragment>
				<section className={css.NewExperience__Filters}>
					{wellSelect}
					{topicSelect}
				</section>
				<section>
					<p>{this.state.filterInstructions}</p>
				</section>
				<section className={css.NewExperience__Filters}>
					{sectionFilter}
					{formationFilter}
					{operationFilter}
					{depthFilter}
				</section>
			</React.Fragment>
		) : null;
		const formHeaderCSS = this.props.discipline
			? css.NewExperience__Filters
			: css.NewExperience__SelectDiscipline;
		const otherEntries = this.props.currTopic ? (
			<section className={css.NewExperience__OtherEntries}>
				<ul>
					<li key='1'>
						Future feature other experience entries section
					</li>
					<li key='2'>
						Future feature other experience entries section
					</li>
					<li key='3'>
						Future feature other experience entries section
					</li>
					<li key='4'>
						Future feature other experience entries section
					</li>
				</ul>
			</section>
		) : null;
		// * Finally create form
		const form = this.createForm(this.state.formConfig);
		return (
			<article className={css.NewExperience}>
				<section className={css.NewExperience__Title}>
					<EquinorPointer />
					<h1>{this.state.formTitle}</h1>
				</section>
				<section className={css.NewExperience__Subtitle}>
					<h2 className='italic'>{this.state.subtitle}</h2>
				</section>
				<section className={formHeaderCSS}>
					{disciplineSelect}
					{startOverBtn}
				</section>
				{formFilterSection}
				{otherEntries}
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
