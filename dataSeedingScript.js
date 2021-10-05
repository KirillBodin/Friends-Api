const fs = require('fs');
const db = require('./databaseServices/db');
const Users = require('./models/users');
const Friends = require('./models/friends');

// Connect to Mongo Database
db().then();

// Read The JSON files
const people = JSON.parse(fs.readFileSync(`${__dirname}/Data/Users.json`, 'utf-8'));
const connections = JSON.parse(fs.readFileSync(`${__dirname}/Data/Connections.json`, 'utf-8'));

const importData = async () => {
    try {
        await Users.create(people);
        await Friends.create(connections);
        console.log(`Data successfully imported`);
        process.exit();
    } catch (err) {
        console.error(err);
    }
};


// Delete the data from DB
const deleteData = async () => {
    try {
        await Users.deleteMany();
        await Friends.deleteMany();
        console.log(`Data successfully deleted`);
        process.exit();
    } catch (err) {
        console.error(err)
    }
}

if (process.argv[2] === '-i') {
    importData().then();
} else if (process.argv[2] === '-d') {
    deleteData().then();
}