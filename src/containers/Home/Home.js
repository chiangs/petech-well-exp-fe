import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import css from './Home.module.css';
import EquinorPointer from '../../components/EquinorPointer/EquinorPointer';

export default class Home extends Component {
	navTo(route) {
		this.props.history.push(route);
	}

	render() {
		const title = 'JOHAN SVERDRUP';
		const title2 = 'Well Experience';
		const subtitle = 'Subtitle placeholder text.';
		const buttonsPrompt = 'Start here.';
		const buttons = [
			{
				label: 'Add experiences',
				type: 'submit',
				icon: 'edit',
				iconType: 'solid',
				iconColor: 'var(--equinor-supporting-blue-light)',
				route: '/new'
			},
			{
				label: 'Search experiences',
				type: 'default',
				icon: 'search-alt',
				route: '/search'
			}
		];
		const buttonsList = buttons.map(buttonConfig => (
			<li className={css.Home__Button} key={buttonConfig.route}>
				<Button
					button={buttonConfig}
					btnClick={() => this.navTo(buttonConfig.route)}
				/>
			</li>
		));
		return (
			<article className={css.Home}>
				<section className={css.Home__Title}>
					<h1>
						<span className={css.Title__Part1}>{title}</span>
						<span className={css.Title__Part2}>{title2}</span>
					</h1>
				</section>
				<section className={css.Home__Subtitle}>
					<h2 className="italic">{subtitle}</h2>
				</section>
				<section className={css.Home__Buttons}>
					<p>{buttonsPrompt}</p>
					<ul>{buttonsList}</ul>
				</section>
				<section className={css.Home__InfoSection}>
					<h3>
						This is a mock-up to drive further discussion and
						crystallization of the app flow data structure, and
						specifically the MVP.
					</h3>
					<p>
						Some form validations are not implemented (i.e.,
						requiring at least one tag from Section, Formation, or
						Operation). File upload will be implemented as a drag
						and drop or click to select box from 3rd party library.
						Some views are not implemented and will redirect to the
						404 page. Also, the clearing or retaining of a view's
						state is not fully implemented at this stage.
					</p>
					<span className={css.Home__Pointer}>
						<EquinorPointer />
					</span>
				</section>
			</article>
		);
	}
}
