const mongoose = require('mongoose');
const config = require('../config/keys.dev')

const connectDatabase = async () => {
    const conn = await mongoose.connect(config.MONGODB_URI, {
        useNewUrlParser: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDatabase;