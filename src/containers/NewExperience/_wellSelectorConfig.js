import { INPUT_TYPES, WELLS } from '../../_utils/constants';

export const wellSelector = {
	wells: {
		elementConfig: {
			label: 'Select well',
			hint: '',
			type: INPUT_TYPES.select,
			value: '',
			options: WELLS
		},
		validation: {}
	}
};
