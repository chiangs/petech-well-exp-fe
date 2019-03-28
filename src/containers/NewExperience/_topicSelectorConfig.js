import { INPUT_TYPES } from '../../_utils/constants';

// * App will figure out what are the required topics first, then append the rest of the topics
// * as optional at the end of the array
// ? MVP: Differentiate using bold in option element?

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
