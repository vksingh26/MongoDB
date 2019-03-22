const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'user';
// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function () {
    const db = client.db(dbName);
    console.log(`Connected successfully to server`);
    // db.dropDatabase(function () {
    //      console.log(`Dropped successfully`);
    //     client.close();
    // });
    // creatUser(db, () => {
    //     getUsersRecord(db, () => {
    //         client.close();
    //     })
    // })

    // getOneUser(db, () => {
    //     client.close();
    // })

    // inAndNinCompare(db, ()=>{
    //     //getUsersRecord(db, () => {
    //     client.close();
    //     //})
    // });

    // getUsersRecord(db, () => {
    //     client.close();
    // })
    // orAndNorCompare(db, ()=>{
    //     client.close();
    // });
    andOperator(db, ()=>{
        client.close();
    })
});

const creatUser = (db, callback) => {
    console.log(`Entering into create user method!`);
    const collection = db.collection("Users");

    collection.insertMany([{
                "id": 2,
                "name": "Ervin Howell",
                "username": "Antonette",
                "email": "Shanna@melissa.tv",
                "address": {
                    "street": "Victor Plains",
                    "suite": "Suite 879",
                    "city": "Wisokyburgh",
                    "zipcode": "90566-7771",
                    "geo": {
                        "lat": "-43.9509",
                        "lng": "-34.4618"
                    }
                },
                "phone": "010-692-6593 x09125",
                "website": "anastasia.net",
                "company": {
                    "name": "Deckow-Crist",
                    "catchPhrase": "Proactive didactic contingency",
                    "bs": "synergize scalable supply-chains"
                }
            },
            {
                "id": 3,
                "name": "Clementine Bauch",
                "username": "Samantha",
                "email": "Nathan@yesenia.net",
                "address": {
                    "street": "Douglas Extension",
                    "suite": "Suite 847",
                    "city": "McKenziehaven",
                    "zipcode": "59590-4157",
                    "geo": {
                        "lat": "-68.6102",
                        "lng": "-47.0653"
                    }
                },
                "phone": "1-463-123-4447",
                "website": "ramiro.info",
                "company": {
                    "name": "Romaguera-Jacobson",
                    "catchPhrase": "Face to face bifurcated interface",
                    "bs": "e-enable strategic applications"
                }
            },
            {
                "id": 4,
                "name": "Patricia Lebsack",
                "username": "Karianne",
                "email": "Julianne.OConner@kory.org",
                "address": {
                    "street": "Hoeger Mall",
                    "suite": "Apt. 692",
                    "city": "South Elvis",
                    "zipcode": "53919-4257",
                    "geo": {
                        "lat": "29.4572",
                        "lng": "-164.2990"
                    }
                },
                "phone": "493-170-9623 x156",
                "website": "kale.biz",
                "company": {
                    "name": "Robel-Corkery",
                    "catchPhrase": "Multi-tiered zero tolerance productivity",
                    "bs": "transition cutting-edge web services"
                }
            },
            {
                "id": 5,
                "name": "Chelsey Dietrich",
                "username": "Kamren",
                "email": "Lucio_Hettinger@annie.ca",
                "address": {
                    "street": "Skiles Walks",
                    "suite": "Suite 351",
                    "city": "Roscoeview",
                    "zipcode": "33263",
                    "geo": {
                        "lat": "-31.8129",
                        "lng": "62.5342"
                    }
                },
                "phone": "(254)954-1289",
                "website": "demarco.info",
                "company": {
                    "name": "Keebler LLC",
                    "catchPhrase": "User-centric fault-tolerant solution",
                    "bs": "revolutionize end-to-end systems"
                }
            },
            {
                "id": 6,
                "name": "Mrs. Dennis Schulist",
                "username": "Leopoldo_Corkery",
                "email": "Karley_Dach@jasper.info",
                "address": {
                    "street": "Norberto Crossing",
                    "suite": "Apt. 950",
                    "city": "South Christy",
                    "zipcode": "23505-1337",
                    "geo": {
                        "lat": "-71.4197",
                        "lng": "71.7478"
                    }
                },
                "phone": "1-477-935-8478 x6430",
                "website": "ola.org",
                "company": {
                    "name": "Considine-Lockman",
                    "catchPhrase": "Synchronised bottom-line interface",
                    "bs": "e-enable innovative applications"
                }
            },
            {
                "id": 7,
                "name": "Kurtis Weissnat",
                "username": "Elwyn.Skiles",
                "email": "Telly.Hoeger@billy.biz",
                "address": {
                    "street": "Rex Trail",
                    "suite": "Suite 280",
                    "city": "Howemouth",
                    "zipcode": "58804-1099",
                    "geo": {
                        "lat": "24.8918",
                        "lng": "21.8984"
                    }
                },
                "phone": "210.067.6132",
                "website": "elvis.io",
                "company": {
                    "name": "Johns Group",
                    "catchPhrase": "Configurable multimedia task-force",
                    "bs": "generate enterprise e-tailers"
                }
            },
            {
                "id": 8,
                "name": "Nicholas Runolfsdottir V",
                "username": "Maxime_Nienow",
                "email": "Sherwood@rosamond.me",
                "address": {
                    "street": "Ellsworth Summit",
                    "suite": "Suite 729",
                    "city": "Aliyaview",
                    "zipcode": "45169",
                    "geo": {
                        "lat": "-14.3990",
                        "lng": "-120.7677"
                    }
                },
                "phone": "586.493.6943 x140",
                "website": "jacynthe.com",
                "company": {
                    "name": "Abernathy Group",
                    "catchPhrase": "Implemented secondary concept",
                    "bs": "e-enable extensible e-tailers"
                }
            },
            {
                "id": 9,
                "name": "Glenna Reichert",
                "username": "Delphine",
                "email": "Chaim_McDermott@dana.io",
                "address": {
                    "street": "Dayna Park",
                    "suite": "Suite 449",
                    "city": "Bartholomebury",
                    "zipcode": "76495-3109",
                    "geo": {
                        "lat": "24.6463",
                        "lng": "-168.8889"
                    }
                },
                "phone": "(775)976-6794 x41206",
                "website": "conrad.com",
                "company": {
                    "name": "Yost and Sons",
                    "catchPhrase": "Switchable contextually-based project",
                    "bs": "aggregate real-time technologies"
                }
            },
            {
                "id": 10,
                "name": "Clementina DuBuque",
                "username": "Moriah.Stanton",
                "email": "Rey.Padberg@karina.biz",
                "address": {
                    "street": "Kattie Turnpike",
                    "suite": "Suite 198",
                    "city": "Lebsackbury",
                    "zipcode": "31428-2261",
                    "geo": {
                        "lat": "-38.2386",
                        "lng": "57.2232"
                    }
                },
                "phone": "024-648-3804",
                "website": "ambrose.net",
                "company": {
                    "name": "Hoeger LLC",
                    "catchPhrase": "Centralized empowering task-force",
                    "bs": "target end-to-end models"
                }
            }
        ],
        function (err, result) {
            console.log(`Inserted documents in the records!`);
            callback(result);
        }
    );
}
const getUsersRecord = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('Users');
    // Find some documents
    collection.find().toArray(function (err, docs) {
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
};

const getOneUser = (db, callback) => {
    const collection = db.collection("Users");
    console.log(`Entering into get one user method!`);
    collection.findOne({
                name: 'Ervin Howell',
            }, function (err, docs) {
        console.log(`Found one user record`);
        console.log(docs);
        callback(docs);
    })
}
//in and nin
const inAndNinCompare = (db, callback) => {
    const collection = db.collection("Users");
    console.log(`Entering into innin method!`);
    collection.find({runtime: {$in: ['conrad.com', 'ambrose.net']}}).toArray(function(err, docs){
        console.log(`Found following records!`);
        console.log(docs);
        callback(docs);
    }) 
    collection.find({
        runtime: {
            $nin: ['conrad.com', 'ambrose.net']
        }
    },
    function (err, docs) {
        console.log(`Found following records!`);
        console.log(docs);
        callback(docs);
    })
}

const orAndNorCompare = (db, callback) => {
    const collection = db.collection("Users");
    console.log(`Entering into ornor method!`);
    //console.log(`Nor condition will start from here`);
    // collection.find({ $or: [{name: 'Ervin Howell'}, {name: 'Dayna Park'}]}).toArray(function (err, docs) {
    //     console.log(`Found following ornor records!`);
    //     console.log(docs);
    //     callback(docs);
    // })

    console.log(`Nor condition will start from here`);
    collection.find({
        $nor: [{
            name: 'Ervin Howell'
        }, {
            name: 'Dayna Park'
        }]
    }).toArray(function (err, docs) {
        console.log(`Found following ornor records!`);
        console.log(docs);
        callback(docs);
    })
}

const andOperator = (db, callback) => {
    const collection = db.collection("Users");
    console.log(`Entering into and operator method!`);
    collection.find({ $and: [{name: 'Ervin Howell'}, {username: 'Antonette'}]}).toArray((err, docs) => {
        console.log(`Found the following records!`);
        console.log(docs);
        callback(docs);
    })
}