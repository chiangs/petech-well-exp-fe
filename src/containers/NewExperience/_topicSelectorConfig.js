import { INPUT_TYPES, TOPICS_REQUIRED } from '../../_utils/constants';

export const topicsRequiredSelect = discipline => ({
	topicsRequired: {
		elementConfig: {
			label: 'Select well',
			hint: 'This is required.',
			type: INPUT_TYPES.select,
			value: '',
			options: [...TOPICS_REQUIRED[discipline]]
		},
		validation: {}
	}
});
