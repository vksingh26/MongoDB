Starting MongoDB from scratch.

/*How to install and run mongodb in your system (windows)*/
1. Download and Install mongodb from here https://www.mongodb.com/download-center.
2. Set the path in environment variables
3. Open cmd prompt and run mongod.


<!-- Syntax for writting mongodb will change for different drivers like nodejs, python etc  -->
//ADDING COLLECTION VALIDATION 
1. If we want to congifure our collection in different way then we can use createCollection method. like db.createCollection();
2. First argument is the name of the collection.
3. Second argument is the validator which will take the another subdocument.
4. for eg: db.createCollection("collectionname", {validator: {$jsonSchema: {bsonType: "object", required:[""title, text, creator, comments"], properties:}}}).