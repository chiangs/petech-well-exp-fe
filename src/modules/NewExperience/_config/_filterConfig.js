import { INPUT_TYPES } from '../../../_utils/constants';

export const newExpFilter = {
	section: {
		elementConfig: {
			label: 'Section',
			hint: 'Optional',
			type: INPUT_TYPES.select,
			value: '',
			options: [
				{ id: 0, displayValue: 'None selected' },
				{ id: 1, displayValue: 'Section 1' },
				{ id: 2, displayValue: 'Section 2' },
				{ id: 3, displayValue: 'Section 3' }
			]
		},
		validation: {}
	},
	formation: {
		elementConfig: {
			label: 'Formation',
			hint: 'Optional',
			type: INPUT_TYPES.select,
			value: '',
			options: [
				{ id: 0, displayValue: 'None selected' },
				{ id: 1, displayValue: 'Formation 1' },
				{ id: 2, displayValue: 'Formation 2' },
				{ id: 3, displayValue: 'Formation 3' }
			]
		},
		validation: {}
	},
	operation: {
		elementConfig: {
			label: 'Operation',
			hint: 'Optional',
			type: INPUT_TYPES.select,
			value: '',
			options: [
				{ id: 0, displayValue: 'None selected' },
				{ id: 1, displayValue: 'Operation 1' },
				{ id: 2, displayValue: 'Operation 2' },
				{ id: 3, displayValue: 'Operation 3' }
			]
		},
		validation: {}
	},
	depth: {
		elementConfig: {
			label: 'Depth',
			hint: 'Optional',
			type: INPUT_TYPES.select,
			value: '',
			options: [
				{ id: 0, displayValue: 'None selected' },
				{ id: 1, displayValue: 'Depth 1' },
				{ id: 2, displayValue: 'Depth 2' },
				{ id: 3, displayValue: 'Depth 3' }
			]
		},
		validation: {}
	}
};
