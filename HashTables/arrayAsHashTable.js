// Search / Insert / Deletion => 0(1)
// Simple : let hashTable = {}; hashTable.item1 = '1'; console.log(hashTable.item1); => '1'
//
// Hashtable is synchronized, whereas HashMap is not.
// Hashtable does not allow null keys or values.  HashMap allows one null key and any number of null values.
// One of HashMap's subclasses is LinkedHashMap, so in the event that you'd want predictable iteration order (which is insertion order by default),
// you could easily swap out the HashMap for a LinkedHashMap. This wouldn't be as easy if you were using Hashtable.
//
// http://stackoverflow.com/questions/40471/differences-between-hashmap-and-hashtable



// Credit : https://gist.github.com/alexhawkins/f6329420f40e5cafa0a4
var HashTable = function() {
  this._storage = [];
  this._count = 0;
  this._limit = 8;
}


HashTable.prototype.insert = function(key, value) {
  //create an index for our storage location by passing it through our hashing function
  var index = this.hashFunc(key, this._limit);
  //retrieve the bucket at this particular index in our storage, if one exists
  //[[ [k,v], [k,v], [k,v] ] , [ [k,v], [k,v] ]  [ [k,v] ] ]
  var bucket = this._storage[index]
    //does a bucket exist or do we get undefined when trying to retrieve said index?
  if (!bucket) {
    //create the bucket
    var bucket = [];
    //insert the bucket into our hashTable
    this._storage[index] = bucket;
  }

  var override = false;
  //now iterate through our bucket to see if there are any conflicting
  //key value pairs within our bucket. If there are any, override them.
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      //overide value stored at this key
      tuple[1] = value;
      override = true;
    }
  }

  if (!override) {
    //create a new tuple in our bucket
    //note that this could either be the new empty bucket we created above
    //or a bucket with other tupules with keys that are different than 
    //the key of the tuple we are inserting. These tupules are in the same
    //bucket because their keys all equate to the same numeric index when
    //passing through our hash function.
    bucket.push([key, value]);
    this._count++
      //now that we've added our new key/val pair to our storage
      //let's check to see if we need to resize our storage
      if (this._count > this._limit * 0.75) {
        this.resize(this._limit * 2);
      }
  }
  return this;
};


HashTable.prototype.remove = function(key) {
  var index = this.hashFunc(key, this._limit);
  var bucket = this._storage[index];
  if (!bucket) {
    return null;
  }
  //iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    //check to see if key is inside bucket
    if (tuple[0] === key) {
      //if it is, get rid of this tuple
      bucket.splice(i, 1);
      this._count--;
      if (this._count < this._limit * 0.25) {
        this._resize(this._limit / 2);
      }
      return tuple[1];
    }
  }
};



HashTable.prototype.retrieve = function(key) {
  var index = this.hashFunc(key, this._limit);
  var bucket = this._storage[index];

  if (!bucket) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      return tuple[1];
    }
  }

  return null;
};


HashTable.prototype.hashFunc = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};


HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._count = 0;
  this._storage = [];

  oldStorage.forEach(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};


HashTable.prototype.retrieveAll = function() {
  console.log(this._storage);
  //console.log(this._limit);
};

/******************************TESTS*******************************/

var hashT = new HashTable();

hashT.insert('Alex Hawkins', '510-599-1930');
//hashT.retrieve();
//[ , , , [ [ 'Alex Hawkins', '510-599-1930' ] ] ]
hashT.insert('Boo Radley', '520-589-1970');
//hashT.retrieve();
//[ , [ [ 'Boo Radley', '520-589-1970' ] ], , [ [ 'Alex Hawkins', '510-599-1930' ] ] ]
hashT.insert('Vance Carter', '120-589-1970').insert('Rick Mires', '520-589-1970').insert('Tom Bradey', '520-589-1970').insert('Biff Tanin', '520-589-1970');
//hashT.retrieveAll();
/* 
[ ,
  [ [ 'Boo Radley', '520-589-1970' ],
    [ 'Tom Bradey', '520-589-1970' ] ],
  ,
  [ [ 'Alex Hawkins', '510-599-1930' ],
    [ 'Rick Mires', '520-589-1970' ] ],
  ,
  ,
  [ [ 'Biff Tanin', '520-589-1970' ] ] ]
*/

//overide example (Phone Number Change)
//
hashT.insert('Rick Mires', '650-589-1970').insert('Tom Bradey', '818-589-1970').insert('Biff Tanin', '987-589-1970');
//hashT.retrieveAll();

/* 
[ ,
  [ [ 'Boo Radley', '520-589-1970' ],
    [ 'Tom Bradey', '818-589-1970' ] ],
  ,
  [ [ 'Alex Hawkins', '510-599-1930' ],
    [ 'Rick Mires', '650-589-1970' ] ],
  ,
  ,
  [ [ 'Biff Tanin', '987-589-1970' ] ] ]
*/

hashT.remove('Rick Mires');
hashT.remove('Tom Bradey');
//hashT.retrieveAll();

/* 
[ ,
  [ [ 'Boo Radley', '520-589-1970' ] ],
  ,
  [ [ 'Alex Hawkins', '510-599-1930' ] ],
  ,
  ,
  [ [ 'Biff Tanin', '987-589-1970' ] ] ]
*/

hashT.insert('Dick Mires', '650-589-1970').insert('Lam James', '818-589-1970').insert('Ricky Ticky Tavi', '987-589-1970');
hashT.retrieveAll();


/* NOTICE HOW HASH TABLE HAS NOW DOUBLED IN SIZE UPON REACHING 75% CAPACITY ie 6/8. It is now size 16.
 [,
  ,
  [ [ 'Vance Carter', '120-589-1970' ] ],
  [ [ 'Alex Hawkins', '510-599-1930' ],
    [ 'Dick Mires', '650-589-1970' ],
    [ 'Lam James', '818-589-1970' ] ],
  ,
  ,
  ,
  ,
  ,
  [ [ 'Boo Radley', '520-589-1970' ],
    [ 'Ricky Ticky Tavi', '987-589-1970' ] ],
  ,
  ,
  ,
  ,
  [ [ 'Biff Tanin', '987-589-1970' ] ] ]
*/
console.log(hashT.retrieve('Lam James'));  //818-589-1970
console.log(hashT.retrieve('Dick Mires')); //650-589-1970
console.log(hashT.retrieve('Ricky Ticky Tavi')); //987-589-1970
console.log(hashT.retrieve('Alex Hawkins')); //510-599-1930
console.log(hashT.retrieve('Lebron James')); //null