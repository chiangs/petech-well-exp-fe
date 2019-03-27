import { INPUT_TYPES, TOPICS } from '../../_utils/constants';
// ! Redo this logic
export const topicSelectConfig = topics => ({
	topics: {
		elementConfig: {
			label: 'Select topic',
			hint: 'These are required for selected discipline.',
			type: INPUT_TYPES.select,
			value: '',
			options: [...topics]
		},
		validation: {}
	}
});
