import React, { Component } from 'react';
import css from './App.module.css';

class App extends Component {
	render() {
		return (
			<div className={css.App}>
				{/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
				<h1>equinor</h1>
				<h2 className="italic">PETECH Well Experience App</h2>
				<p className="italic bold">Energy Red</p>
				<a href="/">downloads</a>
				<br />
				<a href="/">home</a>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Deserunt eius dignissimos veritatis voluptate, rem ipsum id
					voluptas quaerat harum veniam omnis nostrum sequi tempore
					iusto quod? Dolorem fuga tenetur architecto.
				</p>
			</div>
		);
	}
}

export default App;
