import React from 'react';
import Pointer from '../../_assets/icons/equinor-pointer-svg.svg';
import css from './EquinorPointer.module.css';

const EquinorPointer = () => {
	return <img className={css.Pointer} src={Pointer} alt="Equinor pointer" />;
};

export default EquinorPointer;
