const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

console.time("update");

const url = 'mongodb://10.10.4.37:27017/obdr';

const onSuccessFindBeforeUpdate = (database, idContainer) => {
	return (error, result) => {
		console.log(result.description);
		database.collection('container').update({"_id": new ObjectID(idContainer)},{$set : {description : 'test new desc4'}}, onSuccessAfterUpdate(database, idContainer));
	}
}

const onSuccessAfterUpdate = (database, idContainer) => {
	return () => {
		database.collection('container').findOne({"_id": new ObjectID(idContainer)}, onSuccessAfterFindAfterUpdate(database,idContainer));
	}
}

const onSuccessAfterFindAfterUpdate = (database, idContainer) => {
	return (error, result) => {
		console.log(result.description);
		database.close();
		console.timeEnd("update");
	}
}

MongoClient.connect(url, (err, database) => {
	const idContainer ="5887294eaf68a509b0ba1aaf";
	database.collection('container').findOne({"_id": new ObjectID(idContainer)}, onSuccessFindBeforeUpdate(database, idContainer));
});