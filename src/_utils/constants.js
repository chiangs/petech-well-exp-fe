export const INPUT_TYPES = {
	default: 'default',
	password: 'password',
	textarea: 'textarea',
	select: 'select',
	text: 'text',
	url: 'url',
	file: 'file'
};

export const PASSWORD_SHOW = 'Show';
export const PASSWORD_HIDE = 'Hide';

export const DISCIPLINES = [
	{ id: 0, displayValue: 'None selected' },
	{ id: 1, displayValue: 'Geology' },
	{ id: 2, displayValue: 'Geophysics' },
	{ id: 3, displayValue: 'Operation Geology' },
	{ id: 4, displayValue: 'Petrophysics' },
	{ id: 5, displayValue: 'Production' },
	{ id: 6, displayValue: 'Reservoir' },
	{ id: 7, displayValue: 'Well Leader' }
];

export const WELLS = [
	{ id: 0, displayValue: 'None selected' },
	{ id: 1, displayValue: 'WellName1' },
	{ id: 2, displayValue: 'WellName2' },
	{ id: 3, displayValue: 'WellName3' },
	{ id: 4, displayValue: 'WellName4' },
	{ id: 5, displayValue: 'WellName5' },
	{ id: 6, displayValue: 'WellName6' },
	{ id: 7, displayValue: 'WellName7' },
	{ id: 8, displayValue: 'WellName8' },
	{ id: 9, displayValue: 'WellName9' },
	{ id: 10, displayValue: 'WellName10' },
	{ id: 11, displayValue: 'WellName11' }
];

export const TOPICS = [
	{ id: 0, displayValue: 'None selected', requiredBy: [] },
	{
		id: 1,
		displayValue: 'Formation picks plan / actual',
		requiredBy: [DISCIPLINES[1]]
	},
	{
		id: 2,
		displayValue: 'TD criteria pretrill / actual',
		requiredBy: [DISCIPLINES[1]]
	},
	{
		id: 3,
		displayValue: 'Segment/geological area',
		requiredBy: [DISCIPLINES[1]]
	},
	{
		id: 4,
		displayValue: 'Faults and fractures',
		requiredBy: [DISCIPLINES[2]]
	},
	{ id: 5, displayValue: 'Drilling fluid', requiredBy: [DISCIPLINES[3]] },
	{ id: 6, displayValue: 'Steering', requiredBy: [DISCIPLINES[3]] },
	{ id: 7, displayValue: 'Other', requiredBy: [] }
];

// export const TOPICS_REQUIRED = {
// 	Geology: [
// 		{ id: 0, displayValue: 'None selected' },
// 		{ id: 1, displayValue: 'WellName1' },
// 		{ id: 2, displayValue: 'WellName2' },
// 		{ id: 3, displayValue: 'WellName3' },
// 		{ id: 4, displayValue: 'WellName4' }
// 	]
// };

// export const TOPICS_OPTIONAL = [
// 	{ id: 0, displayValue: 'None selected' },
// 	{ id: 1, displayValue: 'WellName1' },
// 	{ id: 2, displayValue: 'WellName2' },
// 	{ id: 3, displayValue: 'WellName3' },
// 	{ id: 4, displayValue: 'WellName4' },
// 	{ id: 5, displayValue: 'WellName5' },
// 	{ id: 6, displayValue: 'WellName6' },
// 	{ id: 7, displayValue: 'WellName7' },
// 	{ id: 8, displayValue: 'WellName8' },
// 	{ id: 9, displayValue: 'WellName9' },
// 	{ id: 10, displayValue: 'WellName10' },
// 	{ id: 11, displayValue: 'WellName11' }
// ];
