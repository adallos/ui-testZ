const getPolls = async () => {
	const response = await fetch('https://api.jsonbin.io/b/5e005484ec09451045d79dc7');
	const data = await response.json();
	return data;
};

export default getPolls;
