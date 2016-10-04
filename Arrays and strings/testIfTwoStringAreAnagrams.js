const isCharPresentInBothStringWithSameCount = (char, stringA, stringB) => {
	const regex = new RegExp(char, 'g');
	return (stringB.match(regex) || []).length === (stringA.match(regex) || []).length;
}

const testIfTwoStringAreAnagrams = (stringA, stringB) => {

	const notAnagramsMsg = `${stringA} and ${stringB} are not anagrams`;
	const anagramsMsg = `${stringA} and ${stringB} are anagrams`;

	if(stringA.length !== stringB.length) {
		return notAnagramsMsg;
	}
	for(char of stringA){
		if(!isCharPresentInBothStringWithSameCount(char, stringA, stringB)){
			return notAnagramsMsg;
		}
	}
	return anagramsMsg;
}