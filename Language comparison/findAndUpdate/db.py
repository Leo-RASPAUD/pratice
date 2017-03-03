import pymongo
import time
from pymongo import MongoClient
from bson.objectid import ObjectId

start = time.time()

def get_db():
	db = MongoClient('10.10.4.37:27017')
	return db

def view_value():
	results = db.obdr.container.find({"_id" : ObjectId("5887294eaf68a509b0ba1aaf")})
	element = results[0]
	print element["description"]

db = get_db()
view_value()
db.obdr.container.update_one({"_id": ObjectId("5887294eaf68a509b0ba1aaf")}, {"$set" : {"description": "test new desc 1001"}})
view_value()

end = time.time()
print(end - start)