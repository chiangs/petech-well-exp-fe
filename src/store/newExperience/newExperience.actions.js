import * as actionTypes from '../actionTypes';
import { TOPICS } from '../../_utils/constants';

export const setWell = (well, discipline) => {
	return dispatch => {
		// const reqTopicsList = createTopicArray(TOPICS, discipline);
		sortTopics(TOPICS, discipline);
		// const optionalTopicsList =
		// dispatch(setTopicsRequired(reqTopicsList));
		// dispatch(setTopicsOptions(optionalTopicsList));
		dispatch(selectedWell(well));
	};
};

const sortTopics = (topics, discipline) => {
	console.log(topics);
	const topicsCopy = [...topics];
	let sortedTopics = topicsCopy[0];
	const remainderTopics = topicsCopy.slice(1);
	sortedTopics = sortedTopics
		.concat
		// sortRemainderArray(remainderTopics, discipline)
		();
	console.log(sortedTopics);
	// * Sort topics[1] through topics[topics].length
	// * by matching on discipline.id
	// * append that to sortedTopics
};

// * Evalutates if topic requires discipline
// const checkTopicRequiresDiscipline = (list, discipline) => {
// 	list.forEach(topic => {
// 		if (topic.requiredBy.contains(discipline)) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	});
// };

// const sortRemainderArray = (list, discipline) => {
// 	list.sort((a, b) => {
// 		if ()
// 	}
// }

// ! Uncomment to bring back separated req and optional topics
// const matchDiscipline = (list, disciplines) => {
// 	console.log(list, disciplines);
// 	return false;
// };

// const matchTag = (list, tags) => {
// 	console.log(list, tags);

// 	let containsTag = false;
// 	tags.forEach((tag, i) => {
// 		if (list.requiredBy[i].id === tag.id) containsTag = true;
// 	});
// 	return containsTag;
// };

// const createTopicArray = (topicsList, discipline) => {
// 	let topicArray = [];
// 	topicsList.forEach(topic => {
// 		if (
// 			topic.requiredBy.length === 0 ||
// 			(topic.requiredBy.length > 0 && matchTag(topic, [discipline]))
// 		) {
// 			topicArray = topicArray.concat(topic);
// 		}
// 	});
// 	return topicArray;
// };

const selectedWell = well => {
	return {
		type: actionTypes.SET_WELL,
		well: well
	};
};

export const setDiscipline = discipline => {
	return {
		type: actionTypes.SET_DISCIPLINE,
		discipline: discipline
	};
};

export const setCurrTopic = topic => {
	return {
		type: actionTypes.SET_CURR_TOPIC,
		currTopic: topic
	};
};

export const clearState = () => ({
	type: actionTypes.STARTOVER
});

export const setTopicsRequired = topics => {
	return {
		type: actionTypes.SET_TOPICS_REQUIRED,
		topicsRequired: topics
	};
};

// export const setTopicsOptional = topics => {
// 	return {
// 		type: actionTypes.SET_TOPICS_OPTIONAL,
// 		topicsOptional: topics
// 	};
// };
