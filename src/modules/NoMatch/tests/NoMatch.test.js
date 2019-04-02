import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import NoMatch from '../index';
import { Link } from 'react-router-dom';
import EquinorPointer from '../../../shared/EquinorPointer';

configure({ adapter: new Adapter() });

describe('<NoMatch />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<NoMatch />);
	});

	it('renders a title', () => {
		expect(wrapper.contains(<h1>Error 404 - Page not found</h1>));
	});

	it('renders a link to go to index', () => {
		expect(
			wrapper.contains(
				<Link to="/"> click here to go back to the home page.</Link>
			)
		).toBe(true);
	});

	it('renders an Equinor Pointer', () => {
		expect(wrapper.find(EquinorPointer)).toHaveLength(1);
	});
});
