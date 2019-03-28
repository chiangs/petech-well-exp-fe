import * as actionTypes from '../actionTypes';
import { TOPICS } from '../../_utils/constants';

export const setWell = (well, discipline) => {
	return dispatch => {
		// const reqTopicsList = createTopicArray(TOPICS, discipline);
		// dispatch(setTopicsRequired(reqTopicsList));
		// dispatch(setTopicsOptions(optionalTopicsList));
		const sortedTopics = sortTopics(TOPICS, discipline);
		dispatch(setSortedTopics(sortedTopics));
		dispatch(selectedWell(well));
	};
};

const sortTopics = (topics, discipline) => {
	const topicsCopy = [...topics];
	let sortedTopics = [topicsCopy[0]];
	const remainderTopics = topicsCopy.slice(1);
	const checkedTopics = checkRequired(remainderTopics, discipline);
	const sortedRemainderTopics = sortTopicsByRequired(checkedTopics);
	return sortedTopics.concat(sortedRemainderTopics);
};

const sortTopicsByRequired = topics =>
	topics.sort((a, b) => a.required < b.required);

// * for each topic in array, if containsDiscipline, add a property as required
const checkRequired = (topics, discipline) => {
	return topics.map(topic => {
		return {
			...topic,
			required: containsDiscipline(topic, discipline)
		};
	});
};

// * returns boolean based on if topic.requiredBy includes discipline.id
const containsDiscipline = (topic, discipline) => {
	let containsDisciplineId = false;
	topic.requiredBy.forEach(item => {
		if (item.id === discipline.id) {
			containsDisciplineId = true;
		}
	});
	return containsDisciplineId;
};

const selectedWell = well => {
	return {
		type: actionTypes.SET_WELL,
		well: well
	};
};

const setSortedTopics = topics => {
	return {
		type: actionTypes.SET_TOPICS,
		topics: topics
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

// export const setTopicsRequired = topics => {
// 	return {
// 		type: actionTypes.SET_TOPICS_REQUIRED,
// 		topicsRequired: topics
// 	};
// };

// export const setTopicsOptional = topics => {
// 	return {
// 		type: actionTypes.SET_TOPICS_OPTIONAL,
// 		topicsOptional: topics
// 	};
// };
