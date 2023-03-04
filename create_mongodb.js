var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err,db){
    if(err) throw err;
    console.log("data base created!");
    db.close();
});
// require "mpn install mongodb@4.14.0" to work