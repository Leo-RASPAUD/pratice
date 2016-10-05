const isSubString = (stringA, stringB) => {
	const regex = new RegExp(stringA,'g');
	return (stringB.match(stringA) || []) .length > 0;
}

const checkIfStringIsARotation = (stringA, stringB) => {
	const notRotationMessage = `${stringA} is not a rotation of ${stringB}`;
  const rotationMessage = `${stringA} is a rotation of ${stringB}`
  
	if(!stringA || !stringB || stringA.length !== stringB.length){
  	return notRotationMessage;
  }
	let truncatedString = ''+stringA;
  let removedChars = '';
	while(truncatedString.length > 0){
		if(!isSubString(truncatedString, stringB)){
      const indexOfLastChar = truncatedString.length-1;
    	removedChars=truncatedString[indexOfLastChar]+removedChars;
			truncatedString = truncatedString.slice(0,indexOfLastChar);
		} else {
      break;
		}
	}
  return isSubString(removedChars+truncatedString, stringB) ? rotationMessage : notRotationMessage;
}