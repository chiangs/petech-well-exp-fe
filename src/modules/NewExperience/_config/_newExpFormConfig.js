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
			hint: 'Implement drag/drop and click to upload library',
			type: INPUT_TYPES.file,
			value: ''
		},
		validation: {}
	},
	references: {
		elementConfig: {
			label: 'References',
			hint: 'Add references here / will have add button',
			type: INPUT_TYPES.text,
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
	}
};
