import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import css from './Home.module.css';

export default class Home extends Component {
	navTo(route) {
		this.props.history.push(route);
	}

	render() {
		const title = 'PETECH Well Experience';
		const subtitle = 'Subtitle placeholder text.';
		const buttonsPrompt = 'Where do you want to begin?';
		const buttons = [
			{ label: 'Create new experience', type: 'submit', route: '/new' },
			{ label: 'Search experiences', type: '', route: '/search' }
		];
		const buttonsList = buttons.map(button => (
			<li className={css.Home__Button}>
				<Button
					label={button.label}
					btnType={button.type}
					btnClick={() => this.navTo(button.route)}
				/>
			</li>
		));
		return (
			<article className={css.Home}>
				<section className={css.Home__Title}>
					<h1>{title}</h1>
				</section>
				<section className={css.Home__Subtitle}>
					<h2 className="italic">{subtitle}</h2>
				</section>
				<section className={css.Home__Buttons}>
					<p>{buttonsPrompt}</p>
					<ul>{buttonsList}</ul>
				</section>
				<section className={css.Home__InfoSection}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Deserunt eius dignissimos veritatis voluptate, rem ipsum
						id voluptas quaerat harum veniam omnis nostrum sequi
						tempore iusto quod? Dolorem fuga tenetur architecto.
					</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Earum et corporis eaque? Temporibus cumque facere
						est, in quisquam ex iure tempore sunt, sed eum,
						accusantium officiis blanditiis quae saepe autem.
					</p>
				</section>
			</article>
		);
	}
}
