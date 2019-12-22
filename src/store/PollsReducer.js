export default function PollsReducer(state, action) {
	switch (action.type) {
		case 'THUMBS_UP':
			console.log('uppp');
			break;
		case 'THUMBS_DOWN':
			console.log('uppp');
			break;
	
		default:
			return state;
	}
}