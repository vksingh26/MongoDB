//we can run mongo server by using mongod
//run mongo in cmd prompt, once you run the mongo command it will connect with the mongo server.
//For checking db just run command like "show dbs", it will show the list of dbs like local, config and admin which
//is use to store metadata

//1. Now we can create a collection on the fly by usin the below command
    //a. use "name of the db without quotes"
//2. we can insert the data too on the fly using the below command
    //b. db.collectionname.insertone({}).
//3. After inserting we can see the inserted record too by using the below command
    //c. db.cust.findOne()

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