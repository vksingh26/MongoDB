const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017'; //connection url

const dbName = 'ECOMBOOKS'; //databse name

const client = new MongoClient(url); //new mongoclient

//Method to connect to server
client.connect(function (err) {
    //assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    // insertAnotherDocument(db, function () {
    //     findDocuments(db, function () {
    //         client.close();
    //     });
    // });
    aggregateBothCollection(db, function () {
        findDocuments(db, function () {
            console.log(`find documents!`)
            client.close();
        });
    })
});

const insertDocument = (db, callback) => {
    console.log(`Entering into insert document!`);
    const collection = db.collection('books');
    console.log(`${collection}`);
    collection.insertMany([{
            "author": "Chinua Achebe",
            "country": "Nigeria",
            "imageLink": "images/things-fall-apart.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
            "pages": 209,
            "title": "Things Fall Apart",
            "year": 1958
        },
        {
            "author": "Hans Christian Andersen",
            "country": "Denmark",
            "imageLink": "images/fairy-tales.jpg",
            "language": "Danish",
            "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
            "pages": 784,
            "title": "Fairy tales",
            "year": 1836
        },
        {
            "author": "Dante Alighieri",
            "country": "Italy",
            "imageLink": "images/the-divine-comedy.jpg",
            "language": "Italian",
            "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
            "pages": 928,
            "title": "The Divine Comedy",
            "year": 1315
        },
        {
            "author": "Unknown",
            "country": "Sumer and Akkadian Empire",
            "imageLink": "images/the-epic-of-gilgamesh.jpg",
            "language": "Akkadian",
            "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
            "pages": 160,
            "title": "The Epic Of Gilgamesh",
            "year": -1700
        }
    ], (err, result) => {
        console.log(`data has been inserted!`);
        callback(result);
        console.log(err);
    });
};

const insertAnotherDocument = (db, callback) => {
    const anotherCollection = db.collection('bookdetails');
    anotherCollection.insertMany([{
        "AddressOne": "Bangalore",
        "AddressTwo": "Karnataka"
    }, {
        "AddressOne": "Kolkata",
        "AddressTwo": "West Bengal"
    }, {
        "AddressOne": "Patna",
        "AddressTwo": "Bihar"
    }, {
        "AddressOne": "Mumbari",
        "AddressTwo": "Maharastra"
    }], (err, result) => {
        console.log(`Another data has been inserted!`);
        callback(result);
        console.log(err);
    });
};

const updateManyDocuments = (db, callback) => {
    console.log(`Entering into update many`)
    const collection = db.collection('bookdetails');
    collection.updateMany({}, {
        $set: {
            address: [ObjectId("5c8943d843f5844b688f51f9"), ObjectId("5c8943d843f5844b688f51fa"),
                ObjectId("5c8943d843f5844b688f51fb"), ObjectId("5c8943d843f5844b688f51fc")
            ]
        }
    }, (err, docs) => {
        console.log(docs);
        callback(docs);
    })
}

const findDocuments = (db, callback) => {
    console.log(`Entering into find document!`);
    const collection = db.collection('bookdetails');
    collection.find().toArray(function (err, docs) {
        console.log(`Found the following records`);
        console.log(docs)
        callback(docs);
    });
}


const aggregateBothCollection = (db, callback) => {
    console.log(`Entering into aggregation method!`);
    const collection = db.collection('book');
    const collection1 = db.collection('bookdetails');
    console.log(collection1);
    collection.aggregate([{
        $lookup: {
            from: "bookdetails",
            localField: "address",
            foreignField: "_id",
            as: "booksInfo"
        }
    }]);
}

//ADDING COLLECTION VALIDATION
console.log(`ADDING COLLECTION VALIDATION`);

db.createCollection("collectionname", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['title', 'text', 'creator', 'comments'],
            properties: {
                title:{
                    bsonType: "string",
                    description: 'must be a string and is required'
                },
                text: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                creator: {
                    bsonType: "objectId",
                    description: "Must be an objectId and is required"
                },
                comments: {
                    bsonType: "array",
                    description: "must be an array and is required",
                    items: {
                        bsonType: "object",
                        required: ["text", "author"],
                        properties: {
                            text: {
                                bsonType: "string",
                                description: "must be a text and is required"
                            },
                            author: {
                                bsonType: "objectId",
                                description: "Must be an object id and is required"
                            }
                        }
                    }
                }
            }
        }
    }
})
