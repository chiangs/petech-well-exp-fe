import { INPUT_TYPES, WELLBORES } from '../../../_utils/constants';

export const wellSelect = {
	wells: {
		elementConfig: {
			label: 'Select well bore',
			hint: 'This is required.',
			type: INPUT_TYPES.select,
			value: '',
			options: WELLBORES
		},
		validation: {}
	}
};
