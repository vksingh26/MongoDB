console.log('Introduction to MongoDB!');


//we can run mongo server by using mongod
//run mongo in cmd prompt, once you run the mongo command it will connect with the mongo server.
//For checking db just run command like "show dbs", it will show the list of dbs like local, config and admin which
//is use to store metadata
//Behind the scene mongodb store data in binary json(BSON) by using mongodriver for which we dont have to worry about, Mongodb will take care of it. We have to store data in json format.
//Mongo will store in BSON because of efficient storage and it will be faster and additional it will support additional type
<!-- Important Info -->

1. Now we can create a collection on the fly by usin the below command
    a. use "name of the db without quotes"
2. we can insert the data too on the fly using the below command
    b. db.collectionname.insertone({}).
3. After inserting we can see the inserted record too by using the below command
    c. db.cust.findOne()
4. We can drop the db too by using the below command:
    d. db.dropDatabase()
5. We can delete data from table or database using the below query
    e. db.dbname.deleteMany({})




//below operations we are doing it in terminal/shell

// > db.cust.insertOne({
//         name: 'vikash',
//         age: 29
//     }) {
//         "acknowledged": true,
//         "insertedId": ObjectId("5c815ccb30f2f88e5828233e")
//     } >
//     db.cust.findOne() {
//         "_id": ObjectId("5c815ccb30f2f88e5828233e"),
//         "name": "vikash",
//         "age": 29
//     } >
//     db.cust.inserMany({
//         name: 'sacreties',
//         age: 30,
//         role: 'Admin'
//     }, {
//         name: 'shankar',
//         age: 27,
//         role: ''
//     })
// 2019 - 03 - 07 T23: 36: 20.923 + 0530 E QUERY[thread1] TypeError: db.cust.inserMany is not a
// function:
// @(shell): 1: 1 >
//     db.cust.insertMany({
//         name: 'sacreties',
//         age: 30,
//         role: 'Admin'
//     }, {
//         name: 'shankar',
//         age: 27,
//         role: ''
//     })
// 2019 - 03 - 07 T23: 36: 29.978 + 0530 E QUERY[thread1] TypeError: documents.map is not a
// function:
// DBCollection.prototype.insertMany @src / mongo / shell / crud_api.js: 295: 1
// @(shell): 1: 1 >
//     db.cust.insertOne({
//         name: 'sacreties',
//         age: 30,
//         role: 'Admin'
//     }, {
//         name: 'shankar',
//         age: 27
//     }) {
//         "acknowledged": true,
//         "insertedId": ObjectId("5c815dba30f2f88e5828233f")
//     } >
//     db.cust.findOne() {
//         "_id": ObjectId("5c815ccb30f2f88e5828233e"),
//         "name": "vikash",
//         "age": 29
//     } >
//     db.cust.find().pretty() {
//         "_id": ObjectId("5c815ccb30f2f88e5828233e"),
//         "name": "vikash",
//         "age": 29
//     } {
//         "_id": ObjectId("5c815dba30f2f88e5828233f"),
//         "name": "sacreties",
//         "age": 30,
//         "role": "Admin" //here if you see, in the first collection role is not there but here its present
//          which is an example of schemaless concept. Schemaless means if we want we can add n number of properties
//          in the same collection, it doesnot matter either that property (like role) exists in the previous collection or not.
//     }

//  db.cust.insertOne({
//          name: 'shankar',
//          age: 27,
//          role: {
//              roleOne: 'Developer',
//              roleTwo: 'Researcher'
//          }
//      }) {
//          "acknowledged": true,
//          "insertedId": ObjectId("5c815f7730f2f88e58282340")
//      } >
//      db.cust.find().pretty() {
//          "_id": ObjectId("5c815ccb30f2f88e5828233e"),
//          "name": "vikash",
//          "age": 29
//      } {
//          "_id": ObjectId("5c815dba30f2f88e5828233f"),
//          "name": "sacreties",
//          "age": 30,
//          "role": "Admin"
//      } {
//          "_id": ObjectId("5c815f7730f2f88e58282340"),
//          "name": "shankar",
//          "age": 27,
//          "role": {   //here we can see nesting of property in db
//              "roleOne": "Developer",
//              "roleTwo": "Researcher"
//          }
//      }



// Database, collections and documents are related
//in mongodb world we have one or more db and db can contains one or more collections
//each collections will have multiple documents, documents is nothing but the data what we are storing in debugger.

//DB have set of collections, collections have set of documents.

//When we execute mongod that moment we can change the port to i.e from 27017 to anything by using the below command:
// execute mongod --port 27019 in cmd prompt
//After changing the port from 27017 which is a default one to something else, in that we when we run mongo in other 
//cmd prompt we need to set/update the port there too by using below command
//execute mongo --port 27019 in cmd prompt

//find() method in mongodb doesnot return all the data by default in the shell/terminal, it just return the 20 record.
//after 20 record it return the cursor object(its nothing but hold all the data), so to get the remaining data we need to run "it" in terminal/shell which return the remaining data.
//to handle this, instead of "it" we can use like "find().toArray()" method to find all the record in one shot or we can use "find().foreach()" method to find all the object.

//Difference between findOne and find. findOne will return only one document and pretty() method doesnot work on it as it just return one data, where as find will return a cursor object which have multiple data and pretty() method work with find().

//Projection, projection in mongo is used to find set of certain/particular data from the db. Like if we want to just find the name from our document, in that case we can just pass key value like name:1, which will return all name from the set of data, but if we want to exclude some the data like _id or something else in that case too we need to pass key value like _id: 0 which will exclude all the _id and just return the name from the data. Please check app.js for example.
//check mongoDB_projection_example.png for projection reference. 

//DATA TYPES:

1. Text
2. Boolean
3. Number (Integer: int 32 (eg: 55),  NumberLong: int 64 (eg: 1000000000), Number Decimal: eg:12.99)
4. ObjectId
5. ISO date 
6. Embedded document
7. Array

//LOOKUP

* To merge the documents in mongodb we can use lookup.
* Below is the cmd to do the same
* db.documentname.aggregate() which will have lookup, so lookup will accept documents and four important things like
* db.documentName.aggregate([{$lookup: {from: "collectionname", localfield:"collectionname", foreignField: "_id", as: ""}}])

* from is the name of the collection where your related document is living.
* where could the reference for the collection could found.
* which field we are relating to your target collection. 
* as is alias under which it will be merged.


//in and nin

* "in" is the comparison operator in mongo db where need to pass an array and will return the data which is equal to the array element. like check mongo-app.js inAndNinCompare methods.
* "nin" is the comparison operator in mongo db where need to pass an array and will return the data which is not equal to the array element. like check mongo-app.js inAndNinCompare methods.