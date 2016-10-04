var checkIfOnlyUniqueCharacters = (stringToTest) => {
	let characters = [];
	for(char of stringToTest){
		characters.indexOf(char) === -1 ? characters.push(char) : return `${char} not is not unique !`;
	}
	return 'All the characters are unique'
}