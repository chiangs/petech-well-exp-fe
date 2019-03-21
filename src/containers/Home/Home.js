import React, { Component } from 'react';
import Button from '../../components/Button/Button';

export default class Home extends Component {
	render() {
		return (
			<article>
				<section>
					<h1>equinor</h1>
				</section>
				<section>
					<h2 className="italic">PETECH Well Experience App</h2>
					<p className="italic bold">Energy Red</p>
					<a href="/">This is a link</a>
					<br />
					<Button btnType="submit" label="Read more" />
				</section>
				<section>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Deserunt eius dignissimos veritatis voluptate, rem ipsum
						id voluptas quaerat harum veniam omnis nostrum sequi
						tempore iusto quod? Dolorem fuga tenetur architecto.
					</p>
				</section>
			</article>
		);
	}
}
