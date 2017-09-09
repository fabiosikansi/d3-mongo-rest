# d3-mongo-rest

A simple web app example to visualise data from a MongoDB collection using d3.js scatterplot.

## Instalation

1. Make sure you have a mongoDB server up and running!
2. Install dependencies ```npm install```
3. If your mongoDB server isn´t running on localhost, edit the connection ```url``` variable on files ```loadData.js``` and ```server.js```
4. Run ```node loadData.js``` to load the example data into the database

## Start server

Run ```npm start``` or ```node server.js```

References: 
[D3.js Scatterplot](https://bl.ocks.org/d3noob/6f082f0e3b820b6bf68b78f2f7786084)
[express.js](https://expressjs.com/)
[MongoDB Node Driver](https://mongodb.github.io/node-mongodb-native/)

## TODO:
* Add config file
* Filter data using query parameters