import React from 'react';
import InputGroup from '../Form/InputGroup/InputGroup';
import Loader from '../Loader/Loader';

const WellSelect = props => {
	const wells = props.wells;
	const wellsList = null;
	// wells.length > 0 ? (
	// 	wells.map(well => (
	// 		<li key={well.id}>
	// 			<InputGroup show={true} configuration={well.config} />
	// 		</li>
	// 	))
	// ) : (
	// 	<Loader />
	// );

	return (
		<React.Fragment>
			<ul>{wellsList}</ul>
		</React.Fragment>
	);
};

export default WellSelect;
