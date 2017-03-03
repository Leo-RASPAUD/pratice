import com.mongodb.BasicDBObject
import com.mongodb.DB
import com.mongodb.DBCollection
import com.mongodb.MongoClient
import org.bson.types.ObjectId

start = System.currentTimeMillis()

MongoClient mongoClient = new MongoClient("10.10.4.37",27017)
DB db = mongoClient.getDB("obdr")
DBCollection table = db.getCollection("container")
CONTAINER_ID="5887294eaf68a509b0ba1aaf"

findAndPrint(CONTAINER_ID, table)

BasicDBObject set = new BasicDBObject('$set', new BasicDBObject("description", "test new desc 13"))
BasicDBObject searchQuery = new BasicDBObject()
searchQuery.put("_id", new ObjectId(CONTAINER_ID))
table.update(searchQuery, set)

findAndPrint(CONTAINER_ID, table)

stop = System.currentTimeMillis()
print stop - start

def findAndPrint(String containerId, table){
    BasicDBObject searchQuery = new BasicDBObject()
    searchQuery.put("_id", new ObjectId(containerId))
    result = table.findOne(searchQuery)
    println result.description
}
