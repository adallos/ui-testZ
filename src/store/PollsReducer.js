export default function PollsReducer(state, action) {
	const receivedStorage = action.payload;
	const {
		highlightedPoll,
		polls,
		highlightedPoll: [{ votes }],
	} = receivedStorage;
	let updatedPoll = highlightedPoll[0];
	let localStorageUpdate = polls;

	switch (action.type) {
	case 'THUMBS_UP':
		updatedPoll = [{
			...updatedPoll,
			votes: {
				thumbsUp: votes.thumbsUp + 1,
				thumbsDown: votes.thumbsDown,
			},
		}];

		localStorageUpdate = [
			...polls,
			updatedPoll[0],
		];

		localStorage.setItem('uiPoll', JSON.stringify(localStorageUpdate));

		return {
			...receivedStorage,
			highlightedPoll: updatedPoll,
		};
	case 'THUMBS_DOWN':
		updatedPoll = [{
			...updatedPoll,
			votes: {
				thumbsUp: votes.thumbsUp,
				thumbsDown: votes.thumbsDown + 1,
			},
		}];

		localStorageUpdate = [
			...polls,
			updatedPoll[0],
		];

		localStorage.setItem('uiPoll', JSON.stringify(localStorageUpdate));

		return {
			...receivedStorage,
			highlightedPoll: updatedPoll,
		};
	default:
		return {};
	}
}
