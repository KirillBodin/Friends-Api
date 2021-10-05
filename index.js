const express = require('express');
const app = express();
const db = require('./databaseServices/db');
const friendsService = require('./src/friendsCount');
const popularUsers = require('./src/popularUsers');
app.use(express.json());
app.use(express.urlencoded({extended: false}))


// Connect To Database
try {
    db().then();
} catch (err) {
    console.error(err);
}

const PORT = process.env.port || 3000

app.use('/popular', popularUsers)
app.use('/friendscount', friendsService)


app.listen(PORT, () => console.log('Server running...'));
module.exports.app = app;



