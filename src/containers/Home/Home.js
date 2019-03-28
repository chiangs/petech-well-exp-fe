import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import css from './Home.module.css';
import EquinorPointer from '../../components/EquinorPointer/EquinorPointer';

export default class Home extends Component {
	navTo(route) {
		this.props.history.push(route);
	}

	render() {
		const title = 'PETECH';
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Deserunt eius dignissimos veritatis voluptate, rem ipsum
						id voluptas quaerat harum veniam omnis nostrum sequi
						tempore iusto quod? Dolorem fuga tenetur architecto.
					</h3>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Earum et corporis eaque? Temporibus cumque facere
						est, in quisquam ex iure tempore sunt, sed eum,
						accusantium officiis blanditiis quae saepe autem.
					</p>
					<span className={css.Home__Pointer}>
						<EquinorPointer />
					</span>
				</section>
			</article>
		);
	}
}
