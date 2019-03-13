const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017'; //connection url

const dbName = 'ECOM'; //databse name

const client = new MongoClient(url); //new mongoclient

//Method to connect to server
client.connect(function (err) { 
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    console.log(db);
    client.close();
});