const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'customer';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    // insertDocuments(db, function () {
    //     findDocuments(db, function () {
    //         client.close();
    //     });
    // });
    // deleteOneDocument(db, ()=>{
    //     console.log('Entering into delete method.');
    //     findDocuments(db, function () {
    //         client.close();
    //     });
    // })

    // deleteManyDocument(db, () => {
    //     console.log('Entering into delete many methods')
    //     findDocuments(db, function () {
    //         client.close();
    //     });
    // })

    // updateOneRecord(db, () => {
    //     console.log('Entering into update one record!');
    //     findDocuments(db, function () {
    //         client.close();
    //     });
    // });

    // updateManyRecord(db, () => {
    //     console.log('Entering into update many record!');
    //     const collection = db.collection('documents');
    //     findDocuments(db, function () {
    //             client.close();
    //         });
    // });

    replaceOneRecord(db, () => {
        console.log('Entering into replace one record method!');
        findDocuments(db, function () {
            client.close();
        });
    });
});

const insertDocuments = function (db, callback) {
    // Get the documents collection
    console.log(`get the db name: ${db}`);
    
    const collection = db.collection('documents');
    //Insert some documents //uncomment insertmany function for multiple insertion.
    // collection.insertMany([
    //     {
    //         name: 'Mahendra',
    //         age: 30,
    //         role: 'QA'
    //     }, 
    //     {
    //         name: 'Prakash ',
    //         age: 26,
    //         role: 'Developer'
    //     },
    //     {
    //         name: 'Sathish ',
    //         age: 29,
    //         role: 'Developer2'
    //     }], 
        collection.insertOne({
            _id: 'cust-info-5', //here if we see, we can add id manually too which will store as id in db and override the one which has been created by mongodb
            name: 'Sravan',
            age:32,
            role: 'Team Lead'
        },
        function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};

const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find().toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
}

const deleteOneDocument = function(db, callback){
    //get the documents colletions
    const collection = db.collection('documents');
    //delete one document
    collection.deleteOne({name:'Sravan'},
        (err, docs) => {
            console.log('Deleted one of the record');
            callback(docs);
        });        
};

const deleteManyDocument = function (db, callback) {
    //get the documents colletions
    const collection = db.collection('documents');
    //delete one document
    collection.deleteMany({
            age: 26
        },
        (err, docs) => {
            console.log('Deleted Many of the record');
            callback(docs);
        });
};

const updateOneRecord = (db, callback) => {
    const collection = db.collection('documents');
    //updateone method
    collection.updateOne({
                role: 'QA Lead 3',
                name: 'Mahendra'
            }, {
                $set: {
                    role: 'QA Lead'
                }
            }, (err, docs) => {
        console.log('Update single record!');
        callback(docs);
    });
}

const updateManyRecord = (db, callback) => {
    const collection = db.collection('documents');
    //updateone method
    collection.updateMany({role: 'QA Lead 4'}, {
        $set: {
            role: 'QA Lead 3'
        }
    }, (err, docs) => {
        console.log('Update many record!');
        callback(docs);
    });
}

const replaceOneRecord = (db, callback) => {
    const collection = db.collection('documents');
    //replace one method
    collection.update({role: 'QA Lead 1'},
    {Name: 'Krijesh', age: 32, role: 'Developer',}, (err, docs) => {
        console.log('Replace single record!');
        callback(docs);
    });
}