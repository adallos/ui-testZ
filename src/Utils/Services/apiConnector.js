const getPolls = async () => {
	const response = await fetch('https://api.jsonbin.io/b/5dfec1c8ec09451045d6fb65');
	const data = await response.json();
	return data;
};

export default getPolls;
