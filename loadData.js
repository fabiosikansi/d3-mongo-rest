//Load demo data csv to a mongo db database
const MongoClient = require('mongodb').MongoClient;
const parse = require('csv-parse');
const fs = require('fs');

//database url
var url = 'mongodb://localhost:27017/d3-mongo';

MongoClient.connect(url, (err, db) => {
    if (err) console.error(err);
    else {
        console.log("Connected successfully to server");
        const collection = db.collection('example-data');
        fs.readFile("data.csv", function (err, fileData) {
            parse(fileData, {columns: true, trim: true}, function(err, rows) {
                collection.insertMany(rows, (err,result) => {
                    if (err) console.error(err);
                    else {
                        console.log(result.result);
                        console.log("Data loaded");
                    }
                    db.close();
                });
            })
        });

    }
});

