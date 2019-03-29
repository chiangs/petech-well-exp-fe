import { INPUT_TYPES } from '../../_utils/constants';

export const newExpForm = {
	externalAvailable: {
		elementConfig: {
			label: 'Experience observations',
			hint: 'For external sharing.',
			type: INPUT_TYPES.textarea,
			value: ''
		},
		validation: {}
	},
	internalOnly: {
		elementConfig: {
			label: 'Experience observations',
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
			hint: 'Upload a figure from your computer',
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
				{ value: 1, displayValue: 'Positive' },
				{ value: 0, displayValue: 'Negative' }
			]
		},
		validation: {}
	}
};
