import { INPUT_TYPES } from '../../../_utils/constants';

export const newExpForm = {
	externalAvailable: {
		elementConfig: {
			label: 'Experience observations (ext)',
			hint: 'For external sharing.',
			type: INPUT_TYPES.textarea,
			value: ''
		},
		validation: {}
	},
	internalOnly: {
		elementConfig: {
			label: 'Experience observations (int)',
			hint: 'For internal use only.',
			type: INPUT_TYPES.textarea,
			value: ''
		},
		validation: {
			required: true,
			valid: false,
			minLength: 3
		}
	},
	link: {
		elementConfig: {
			label: 'Link',
			hint: 'Copy in link as plain text.',
			type: INPUT_TYPES.url,
			value: ''
		},
		validation: {}
	},
	figure: {
		elementConfig: {
			label: 'Figure',
			hint:
				'Not working, will implement drag/drop and click to upload library',
			type: INPUT_TYPES.file,
			value: ''
		},
		validation: {}
	},
	experienceRating: {
		elementConfig: {
			label: 'Overall experience',
			hint: 'What was the overall experience rating?',
			type: INPUT_TYPES.select,
			value: '',
			options: [
				{ id: 0, displayValue: 'Neutral' },
				{ id: 1, displayValue: 'Positive' },
				{ id: 2, displayValue: 'Negative' }
			]
		},
		validation: {}
	},
	section: {
		elementConfig: {
			label: 'Section',
			hint: 'Single or multiselect?',
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
			hint: 'Single or multiselect?',
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
			hint: 'Single or multiselect?',
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
	}
};
