//Simple http server to return data from node
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();

//database url
var url = 'mongodb://localhost:27017/d3-mongo';

const routes = (db) => {
    //Index route
    app.get('/', function (req, res) {
        res.sendfile(__dirname + '/index.html');
    });

    //Data route
    app.get('/data', function (req, res) {
        const collection = db.collection('example-data');
        collection.find().toArray((err,result) => {
            if (err) console.error(err);
            res.send(result);
        })
    });
};

//Start database connection
MongoClient.connect(url, (err, db) => {
    if (err) console.error(err);
    else {
        console.log("Connected successfully to database");
        //build routes with database
        routes(db);
        //start server
        app.listen(3000, function () {
            console.log('Server listening on port 3000!. http://localhost:3000/')
        });
    }
});