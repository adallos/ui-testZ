export default function PollsReducer(state, action) {
	const receivedStorage = action.payload;
	let updatedPoll = {};
	const {
		image,
		name,
		info,
		wiki,
		pollInfo,
		votes,
	} = receivedStorage;

	const staticPolls = state.polls.filter(poll => poll.name !== name);

	let polls = [];
	switch (action.type) {
	case 'THUMBS_UP':
		updatedPoll = {
			image,
			name,
			info,
			wiki,
			pollInfo,
			votes: {
				thumbsUp: votes.thumbsUp + 1,
				thumbsDown: votes.thumbsDown,
			},
		};
		polls = [
			...staticPolls,
			updatedPoll,
		];

		localStorage.setItem('uiPoll', JSON.stringify(polls));
		return {
			polls,
		};
	case 'THUMBS_DOWN':
		updatedPoll = {
			image,
			name,
			info,
			wiki,
			pollInfo,
			votes: {
				thumbsUp: votes.thumbsUp,
				thumbsDown: votes.thumbsDown + 1,
			},
		};
		polls = [
			...staticPolls,
			updatedPoll,
		];

		localStorage.setItem('uiPoll', JSON.stringify(polls));
		return {
			polls,
		};
	default:
		return {};
	}
}
