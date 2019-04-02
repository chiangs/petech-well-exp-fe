import React from 'react';
import InputGroup from '../InputGroup/InputGroup';
import css from './FormFilters.module.css';

const FormFilters = props => {
	const formElements = [];
	for (const key in props.filtersConfig) {
		formElements.push({
			id: key,
			config: props.filtersConfig[key].elementConfig,
			validation: props.filtersConfig[key].validation
		});
	}

	return (
		<ul className={css.FormFilters}>
			{formElements.map(element => (
				<li className={css.FormFilters__Filter} key={element.id}>
					<InputGroup
						show={true}
						configuration={element.config}
						validation={element.validation}
					/>
				</li>
			))}
		</ul>
	);
};

export default FormFilters;
